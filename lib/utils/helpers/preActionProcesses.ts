import { MemoValues } from "actions";
import { FullDependencies } from "../../interfaces/constants.js";
import { checkMemo } from "../../engines/memorizer.js";
import installPackages from "../../engines/installer.js";
import { ConfigCategory } from "../../enums/actions.js";

interface PreActionProps {
    deps?: FullDependencies | null;
    memos?: string[];
    builder: (memoValues: MemoValues) => Promise<void>;
}

/**
 * 
 * @param deps 
 * @returns 
 */

const preAction = async ({
    deps = null,
    memos = [],
    builder,
}: PreActionProps) => {
    const memoValues = await checkMemo({
        keys: memos,
        category: ConfigCategory.RAVEN_NEST,
    });
    if (!memoValues) return;

    deps && (await installPackages(deps));
    await builder(memoValues);
};

export { preAction };
