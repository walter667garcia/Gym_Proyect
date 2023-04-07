import "../plans/plans.css";
import { plansData } from "../../data/plansData"

import whiteTick from "../../assets/whiteTick.png"
const Plams = () => {
  return (
    <div className="plans-container">
      <div className="programs-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JUNERY</span>
        <span className="stroke-text">NOW WHITHUS</span>
      </div>

      {/* PLans Cards */}
      <div className="plans">

        {plansData.map((plan, i) => (

          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="factures">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits --</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        )
        )}
      </div>

    </div>  )
    ;
};

export default Plams;
