> [!IMPORTANT]
> The SharePoint Framework (SPFx) used a gulp-based toolchain from SPFx v1.0 - v1.21.1. [SPFx v1.22 transitioned to a new Heft-based toolchain, replacing the previous dependency on gulp](spfx/release-1.22.md).
>
> As part of this change, gulp commands (tasks) have been replaced with Heft commands (phases). Some commands remain unchanged (such as `package-solution`), some were replaced (such as `gulp serve` is now `heft start`), and some command arguments changed (such as `--ship` is now `--production`).
>
> Refer to the following page for more information on the the Heft commands and the corresponding gulp commands: [Understanding the Heft-based toolchain (how it works)](spfx/toolchain/customize-heft-toolchain-overview.md).
