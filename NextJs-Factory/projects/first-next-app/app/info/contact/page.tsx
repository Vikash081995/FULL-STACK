import Link from "next/link";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
      <Link href="/" className="text-xl text-blue-700 inline-block">
        back home
      </Link>
    </div>
  );
};

export default ContactPage;
