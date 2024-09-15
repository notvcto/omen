import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite our bot to your Discord server!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/oauth2/authorize?client_id=1185264756194549822&permissions=1377039810039&integration_type=0&scope=applications.commands+bot">
            Invite now!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
