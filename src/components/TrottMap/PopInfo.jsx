import { Link } from 'react-router-dom';
import React from 'react';

function PopInfo(props) {
  return (
    <div className="general_popup">
      <div className="bg_popup-block">
        <div>
          <img className="pop-trott_img" src="https://media.cdnws.com/_i/21277/cs400-2906/724/10/speedway-4-trottinette-electrique-puissante.png" alt="" />
        </div>
        <div className="popup_text-info">
          {props.vehicle.publicId === null
            ? <p className="trott_id">{props.vehicle.provider.name}</p>
            : <p className="trott_id">`${props.vehicle.provider.name} n°{props.vehicle.publicId}`</p>}
          <div className="block_trott-info">
            <div className="block_column-img">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path d="M 6.032 2.609 C 6.032 1.168 7.201 0 8.641 0 C 10.082 0 11.25 1.168 11.25 2.609 C 11.25 4.05 10.082 5.218 8.641 5.218 C 7.201 5.218 6.032 4.05 6.032 2.609 Z" fill="rgb(0,17,61)" />
                <path d="M 15.177 7.669 C 15.162 7.664 15.148 7.66 15.132 7.656 L 13.207 7.175 L 10.772 5.348 C 10.659 5.264 10.522 5.218 10.381 5.218 L 6.955 5.218 C 6.782 5.218 6.616 5.287 6.494 5.409 L 2.58 9.322 C 2.326 9.577 2.326 9.99 2.58 10.245 L 3.011 10.675 C 3.246 10.91 3.62 10.931 3.88 10.723 L 6.685 8.479 L 6.685 11.088 L 6.033 14.349 L 4.454 15.927 C 4.234 16.147 4.2 16.492 4.373 16.751 L 4.986 17.67 C 5.185 17.97 5.59 18.051 5.89 17.852 C 5.906 17.841 5.921 17.83 5.936 17.818 L 8.469 15.791 C 8.581 15.702 8.66 15.579 8.695 15.44 L 9.294 13.045 L 10.598 15.001 L 11.642 17.604 C 11.775 17.939 12.155 18.102 12.489 17.968 C 12.506 17.961 12.523 17.954 12.539 17.945 L 13.964 17.233 C 14.273 17.079 14.408 16.71 14.272 16.392 L 12.555 12.392 L 11.25 10.436 L 11.146 8.479 L 12.555 9.131 L 14.577 9.637 C 14.907 9.719 15.246 9.533 15.354 9.21 L 15.592 8.493 C 15.705 8.151 15.519 7.782 15.177 7.669 Z" fill="rgb(0,17,61)" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20">
                <path d="M 16.305 1.333 L 13.8 1.333 L 13.8 0 L 9.2 0 L 9.2 1.333 L 6.695 1.333 C 5.962 1.334 5.368 1.851 5.367 2.488 L 5.367 18.845 C 5.368 19.483 5.962 19.999 6.695 20 L 16.305 20 C 17.038 19.999 17.632 19.483 17.633 18.845 L 17.633 2.488 C 17.632 1.851 17.038 1.334 16.305 1.333 Z M 16.867 18.845 C 16.867 19.115 16.615 19.333 16.305 19.333 L 6.695 19.333 C 6.385 19.333 6.134 19.115 6.133 18.845 L 6.133 2.488 C 6.133 2.219 6.385 2 6.695 2 L 16.305 2 C 16.615 2 16.867 2.219 16.867 2.488 Z" fill="rgb(0,17,61)" />
                <path d="M 14.183 9.667 L 13.033 9.667 L 13.033 5.703 C 13.039 5.616 13.006 5.53 12.943 5.463 C 12.797 5.307 12.458 5.308 12.313 5.464 C 12.303 5.475 12.294 5.486 12.286 5.498 L 8.491 10.825 C 8.417 10.927 8.414 11.057 8.482 11.162 C 8.549 11.268 8.678 11.333 8.817 11.333 L 10.35 11.333 L 10.351 15.643 L 10.351 15.643 C 10.352 15.721 10.381 15.803 10.434 15.862 C 10.506 15.944 10.636 16 10.756 16 C 10.872 16 10.999 15.947 11.072 15.867 C 11.087 15.851 11.1 15.833 11.112 15.814 L 14.523 10.155 C 14.585 10.051 14.58 9.927 14.511 9.828 C 14.441 9.728 14.317 9.667 14.183 9.667 Z" fill="rgb(0,17,61)" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19">
                <path d="M 18.192 2.786 L 2.808 2.786 C 1.26 2.786 0 3.926 0 5.327 L 0 13.674 C 0 15.074 1.26 16.214 2.808 16.214 L 18.192 16.214 C 19.74 16.214 21 15.074 21 13.674 L 21 5.327 C 21 3.926 19.74 2.786 18.192 2.786 Z M 19.63 13.673 C 19.63 14.391 18.985 14.975 18.192 14.975 L 2.808 14.975 C 2.015 14.975 1.37 14.391 1.37 13.673 L 1.37 7.234 L 19.63 7.234 Z M 19.63 5.995 L 1.37 5.995 L 1.37 5.326 C 1.37 4.609 2.015 4.025 2.808 4.025 L 18.192 4.025 C 18.985 4.025 19.63 4.609 19.63 5.326 L 19.63 5.995 Z" fill="#00113D" />
                <path d="M 16.262 8.88 C 15.869 8.88 15.488 8.959 15.139 9.11 C 14.791 8.959 14.41 8.88 14.017 8.88 C 12.578 8.88 11.407 9.94 11.407 11.242 C 11.407 12.544 12.578 13.603 14.017 13.603 C 14.41 13.603 14.791 13.525 15.139 13.374 C 15.488 13.525 15.869 13.603 16.262 13.603 C 17.701 13.603 18.872 12.544 18.872 11.242 C 18.872 9.94 17.701 8.88 16.262 8.88 Z M 16.262 12.364 C 16.002 12.364 15.749 12.291 15.539 12.153 L 15.139 11.893 L 14.739 12.153 C 14.529 12.291 14.276 12.364 14.017 12.364 C 13.333 12.364 12.776 11.86 12.776 11.242 C 12.776 10.623 13.333 10.12 14.017 10.12 C 14.276 10.119 14.529 10.193 14.739 10.33 L 15.139 10.59 L 15.539 10.33 C 15.749 10.193 16.002 10.119 16.262 10.12 C 16.946 10.12 17.502 10.623 17.502 11.242 C 17.502 11.86 16.946 12.364 16.262 12.364 Z M 2.813 9.485 L 7.655 9.485 L 7.655 10.724 L 2.813 10.724 Z M 2.813 11.76 L 9.204 11.76 L 9.204 12.999 L 2.813 12.999 Z" fill="#00113D" />
              </svg>
            </div>
            <div className="block_column-text">
              <p className="trott_distance">100m </p>
              <p className="trott_battery">{props.vehicle.battery}%</p>
              <p>1,00€ + 0.15€/min</p>
            </div>
          </div>
        </div>
        <div>
          <img className="trott_provider-logo" src={`https://cdn.fluctuo.com/providers/${props.vehicle.provider.slug}.jpg`} alt="provider logo" />
        </div>
      </div>
      <Link className="button_popup-trottinfo" to="/login">
        Démarrer
      </Link>
    </div>
  );
}

export default PopInfo;
