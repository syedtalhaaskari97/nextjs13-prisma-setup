import ListUsers from "@/components/listusers.component";

export default async function Home() {
	return (
		<main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
			<ListUsers />
		</main>
	);
}
