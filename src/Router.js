import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Landing from "./pages/Landing";
import Projects from "./pages/Projects";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
                    <Route index element={<Landing/>} />
                    <Route path="projects" element={<Projects/>} />
                </Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
