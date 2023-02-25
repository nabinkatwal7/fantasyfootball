import React from "react";
import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ "background-color": "#f1f1f1" }}
      >
        <div className="container pt-4">
          <section className="mb-4">
            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
              href="https://github.com/nabinkatwal7/fantasyfootball"
            >
              <GitHubIcon />
            </Link>
            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
              href="https://twitter.com/campistaaaaa"
            >
              <TwitterIcon />
            </Link>
            <Link
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
              href="https://nabinkatwal7.github.io/portfolio/?fbclid=IwAR0eL6yqyQiOVbkD8nfVXvRC-aTP6OXNXjLjGaTkiWsSU7tCEgdpyX-f6IA"
            >
              <LanguageIcon />
            </Link>
          </section>
        </div>
        <div
          className="text-center text-dark p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:Nabin Katwal
        </div>
      </footer>
    </div>
  );
}

export default Footer;
