import { useRef } from "react"
import "../join/join.css"


const Join = () => {
  const form = useRef ();
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span></div>
      </div>
      <div className="right-j">

        <form ref={form} className="email-container">
          <input type="email" name="user_email" placeholder="Enter your Email Adrress" />
          <button className="btn btn-jr">Join Now</button>
        </form>

      </div>
    </div>
  )
}

export default Join