use anchor_lang::prelude::*;

declare_id!("11111111111111111111111111111111");

#[program]
pub mod is_it_flooding {
    use super::*;

    /// Stores a minimal, non-sensitive attestation. Evidence stays off-chain;
    /// geohash must be a deliberately coarse location bucket.
    pub fn submit_report(
        ctx: Context<SubmitReport>,
        coarse_geohash: String,
        severity: u8,
        observed_at: i64,
        evidence_hash: [u8; 32],
    ) -> Result<()> {
        require!(severity <= 3, FloodError::InvalidSeverity);
        require!(coarse_geohash.len() <= 12, FloodError::GeohashTooLong);
        let report = &mut ctx.accounts.report;
        report.reporter = ctx.accounts.reporter.key();
        report.coarse_geohash = coarse_geohash;
        report.severity = severity;
        report.observed_at = observed_at;
        report.evidence_hash = evidence_hash;
        report.bump = ctx.bumps.report;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct SubmitReport<'info> {
    #[account(init, payer = reporter, space = FloodReport::SPACE)]
    pub report: Account<'info, FloodReport>,
    #[account(mut)]
    pub reporter: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct FloodReport {
    pub reporter: Pubkey,
    pub coarse_geohash: String,
    pub severity: u8,
    pub observed_at: i64,
    pub evidence_hash: [u8; 32],
    pub bump: u8,
}

impl FloodReport {
    pub const SPACE: usize = 8 + 32 + 4 + 12 + 1 + 8 + 32 + 1;
}

#[error_code]
pub enum FloodError {
    #[msg("Severity must be between 0 and 3.")]
    InvalidSeverity,
    #[msg("Coarse geohash must be no longer than 12 characters.")]
    GeohashTooLong,
}
