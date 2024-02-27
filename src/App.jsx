import React from 'react';
import './App.css';

import Header from 'components/header';
import Footer from 'components/footer';
import DownloadApp from 'components/download_app';
import FooterDetails from 'components/footer_details';
import Partner from 'components/partners';

function App() {
  return (
	<div>
		<Header />
		<Footer />
		<DownloadApp />
		<FooterDetails />
		<Partner />
	</div>
  );
}

export default App;
