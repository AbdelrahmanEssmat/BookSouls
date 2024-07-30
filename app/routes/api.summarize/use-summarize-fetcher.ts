import { useFetcher } from "@remix-run/react";
import type { action } from "./action.server";

export function useSummarizeFetcher() {
	return useFetcher<typeof action>();
}

export type SummarizeFetcher = ReturnType<typeof useSummarizeFetcher>;
