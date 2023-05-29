import logo from '../images/logo.svg';
import main from '../images/main.svg';

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} className="logo" alt="jobster logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Stay organized and manage your job applications effectively. Add,
            track, and delete job entries with ease. Never miss an opportunity
            and stay on top of your job search.
          </p>
          <button className="btn btn-hero">login / register</button>
        </div>
        <img src={main} alt="main image" className="img main-img" />
      </div>
    </main>
  );
};
export default Landing;
