> [!IMPORTANT]
> The SharePoint Framework (SPFx) used a gulp-based toolchain from SPFx v1.0 - v1.21.1. [SPFx v1.22 transitioned to a new Heft-based toolchain, replacing the previous dependency on gulp](/sharepoint/dev/spfx/release-1.22.0).
>
> As part of this change, gulp commands (tasks) have been replaced with Heft commands (phases). Some commands remain unchanged (such as `package-solution`), some were replaced (such as `gulp serve` is now `heft start`), and some command arguments changed (such as `--ship` is now `--production`).
>
> Refer to [Understanding the Heft-based toolchain (how it works)](/sharepoint/dev/spfx/toolchain/customize-heft-toolchain-overview) for Heft commands and corresponding Gulp tasks. Validate the complete project for the target SPFx version; replacing command names alone isn't an upgrade.
