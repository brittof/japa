type Label = "Enhancement" | "Bug" | "Documentation" | "Feature";
type Status = "Pending" | "In Progress" | "Completed";

export interface Task {
	readonly id?: string;
	title: string;
	label?: Label;
	status?: Status;
	createdAt?: string;
}
