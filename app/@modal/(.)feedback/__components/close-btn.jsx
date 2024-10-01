"use client";

import { useRouter } from "next/navigation";

function CloseBtn() {
	const router = useRouter();
	return (
		<button onClick={() => router.back()} className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
			✕
		</button>
	);
}

export default CloseBtn;
