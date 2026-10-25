import Button from "../../components/Button/Button.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { notFound } from "../../content/site.js";

export default function NotFound() {
  return (
    <>
      <PageHeader title={notFound.heading} lead={notFound.body} />
      <div className="container">
        <Button to="/">Back to the homepage</Button>
      </div>
    </>
  );
}
