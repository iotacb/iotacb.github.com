import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Missing from "./pages/Missing";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Landing />} />
					<Route path="projects" element={<Projects />} />
					<Route path="*" element={<Missing />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
