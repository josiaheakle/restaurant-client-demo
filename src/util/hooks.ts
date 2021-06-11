import { useEffect, useLayoutEffect, useState } from "react";

function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

function useIsMobile() {
	const size = useWindowSize();
	const [isMobile, setIsMobile] = useState(size[0] < 1024 ? true : false);
	useEffect(() => {
		if (size[0] < 1024) setIsMobile(true);
		else setIsMobile(false);
	}, [size]);
	return isMobile;
}

export { useWindowSize, useIsMobile };
