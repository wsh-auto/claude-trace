/**
 * Converts an absolute path to Claude's directory encoding format.
 * Claude encodes paths by replacing slashes with hyphens, with special
 * handling for hidden directories (starting with '.') which use '--'.
 * Examples:
 *   /Users/eshao/mnt/misc → -Users-eshao-mnt-misc
 *   /Users/eshao/.bin/claude → -Users-eshao--bin-claude
 *   /Users/eshao/mnt/.config/.claude/projects → -Users-eshao-mnt--config--claude-projects
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