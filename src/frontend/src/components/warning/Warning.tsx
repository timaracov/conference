import { useEffect, useState } from "react"

type WarningProps = {
	theme: string,
}


export function Warning({theme}: WarningProps) {
	const [showContainer, setShowContainer] = useState<boolean>(true);

	useEffect(() => {
		const toSet = localStorage.getItem("warn");

		if (toSet === undefined) {
			localStorage.setItem("warn", "t")
			setShowContainer(true)
			return;
		}

		if (toSet === "t") {
			setShowContainer(true)
		} else {
			setShowContainer(false)
		}
	})

	return (
		showContainer 
			? (
				<div className={theme === "l" ? "warning_container" : "warning_container-dark"}>
					<p className={theme === "l" ? "warning_container_text" : "warning_container_text-dark"}>
						Указанный перечень упражнений выполнять только после консультации с преподавателем
					</p>
				</div>
			)
			: (<div></div>)
	)
}
