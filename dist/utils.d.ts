/**
 * Converts an absolute path to Claude's directory encoding format.
 * Claude encodes paths by replacing all slashes with hyphens.
 * Example: /Users/eshao/mnt/misc → -Users-eshao-mnt-misc
 */
export declare function encodePathForClaude(absolutePath: string): string;
/**
 * Gets the trace directory path following Claude's convention.
 * Mirrors the structure used in ~/.claude/projects/
 *
 * @param workingDir The current working directory to encode
 * @returns Full path to the trace directory: ~/.claude/trace/{encoded-path}/
 */
export declare function getTraceDirectory(workingDir?: string): string;
//# sourceMappingURL=utils.d.ts.map