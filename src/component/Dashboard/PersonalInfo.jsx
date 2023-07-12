import { useState } from "react";
import UpdatePersonalInfo from "../Modal/updatePersonalInfo";

function PersonalInfo() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="col-lg-9 col-md-8 col-12 mg-top-30">
      <div className="homec-dashboard__inner homec-border">
        <h3 className="homec-dashboard__heading">Personal Info</h3>
        <div className="row">
          <UpdatePersonalInfo
            isModalOpen={modalOpen}
            toggleModal={toggleModal}
          />
          <div className="col-lg-6 col-12">
            <div className="homec-agent-detail__img">
              <img src="img/agent-detail.jpg" alt="#" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="homec-agent-detail__body">
              <h3 className="homec-agent-detail__title">Wade De Warren</h3>
              <p>Real Estate Broker</p>
            </div>
            <ul className="homec-agent-detail__list mg-top-30">
              <li>
                <img src="img/agent-phone.svg" alt="#" /> +0938 4937 23
              </li>
              <li>
                <img src="img/agent-email.svg" alt="#" />{" "}
                <a href="mailto:youremailad@gmail.com">Youremailad@gmail.com</a>
              </li>
              <li>
                <img src="img/agent-location.svg" alt="#" /> 2972 Westheimer Rd.
                Santa Ana, Illinois 85486{" "}
              </li>
            </ul>
            <ul className="homec-agent__social homec-agent__social--inline list-none mg-top-30">
              <li>
                <a href="#">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.8617 9.30523C11.5542 8.98499 11.1832 8.81378 10.79 8.81378C10.4001 8.81378 10.0259 8.98182 9.70568 9.30206L8.70376 10.3008C8.62132 10.2564 8.53889 10.2152 8.45962 10.174C8.34548 10.1169 8.23768 10.063 8.14573 10.0059C7.20722 9.40986 6.35432 8.63305 5.5363 7.62796C5.13997 7.127 4.87363 6.70531 4.68022 6.27727C4.94022 6.03947 5.18118 5.79216 5.41581 5.55437C5.50459 5.46559 5.59337 5.37364 5.68215 5.28486C6.34798 4.61903 6.34798 3.75661 5.68215 3.09078L4.81656 2.2252C4.71827 2.12691 4.61681 2.02545 4.52169 1.92399C4.33145 1.72741 4.1317 1.52449 3.92561 1.33425C3.61806 1.02987 3.25027 0.868164 2.86345 0.868164C2.47663 0.868164 2.1025 1.02987 1.78543 1.33425C1.78226 1.33742 1.78226 1.33742 1.77909 1.34059L0.701075 2.42812C0.295233 2.83396 0.0637769 3.32858 0.0130467 3.90246C-0.0630486 4.82829 0.209626 5.6907 0.418888 6.25508C0.932531 7.64064 1.69983 8.92475 2.84443 10.3008C4.23316 11.9591 5.90409 13.2685 7.81281 14.1912C8.54206 14.5368 9.51545 14.9458 10.603 15.0155C10.6696 15.0187 10.7393 15.0219 10.8027 15.0219C11.5351 15.0219 12.1502 14.7587 12.6322 14.2356C12.6354 14.2292 12.6417 14.2261 12.6449 14.2197C12.8097 14.02 13 13.8392 13.1997 13.6458C13.3361 13.5158 13.4756 13.3795 13.6119 13.2368C13.9258 12.9102 14.0907 12.5298 14.0907 12.1398C14.0907 11.7466 13.9226 11.3693 13.6024 11.0522L11.8617 9.30523ZM12.9968 12.6439C12.9936 12.6471 12.9936 12.6439 12.9968 12.6439C12.8731 12.7771 12.7463 12.8976 12.61 13.0307C12.4039 13.2273 12.1946 13.4334 11.9981 13.6649C11.6778 14.0073 11.3005 14.169 10.8059 14.169C10.7583 14.169 10.7076 14.169 10.66 14.1658C9.71837 14.1056 8.84327 13.7378 8.18695 13.4239C6.39237 12.5551 4.81656 11.3218 3.50709 9.75863C2.4259 8.4555 1.703 7.25066 1.22423 5.95704C0.929361 5.16755 0.821559 4.55244 0.869119 3.97222C0.900825 3.60125 1.0435 3.2937 1.30667 3.03054L2.38785 1.94935C2.54321 1.8035 2.70809 1.72424 2.86979 1.72424C3.06954 1.72424 3.23124 1.84472 3.3327 1.94618C3.33587 1.94935 3.33904 1.95252 3.34222 1.95569C3.53562 2.13642 3.71952 2.32349 3.91293 2.52324C4.01122 2.6247 4.11268 2.72616 4.21414 2.83079L5.07972 3.69637C5.41581 4.03246 5.41581 4.34318 5.07972 4.67927C4.98778 4.77122 4.899 4.86317 4.80705 4.95194C4.54072 5.22462 4.28707 5.47827 4.01122 5.72558C4.00488 5.73192 3.99854 5.73509 3.99537 5.74143C3.72269 6.01411 3.77342 6.28044 3.83049 6.46117C3.83366 6.47068 3.83683 6.48019 3.84001 6.4897C4.06512 7.03505 4.38218 7.5487 4.86412 8.16063L4.86729 8.1638C5.74239 9.24182 6.66504 10.082 7.68282 10.7257C7.81281 10.8081 7.94598 10.8747 8.07281 10.9381C8.18695 10.9952 8.29475 11.0491 8.3867 11.1062C8.39938 11.1125 8.41206 11.122 8.42475 11.1283C8.53255 11.1822 8.63401 11.2076 8.73864 11.2076C9.0018 11.2076 9.16667 11.0427 9.22058 10.9888L10.3049 9.90448C10.4127 9.79668 10.5839 9.66668 10.7837 9.66668C10.9803 9.66668 11.142 9.79034 11.2403 9.89814C11.2434 9.90131 11.2434 9.90131 11.2466 9.90448L12.9936 11.6515C13.3202 11.9749 13.3202 12.3078 12.9968 12.6439Z"></path>
                    <path d="M8.10819 3.57275C8.93889 3.71226 9.69351 4.10542 10.2959 4.70784C10.8983 5.31026 11.2883 6.06487 11.431 6.89558C11.4659 7.10484 11.6466 7.25069 11.8527 7.25069C11.8781 7.25069 11.9003 7.24752 11.9256 7.24435C12.1603 7.2063 12.3156 6.98436 12.2776 6.74973C12.1064 5.74464 11.6308 4.82832 10.9047 4.10225C10.1786 3.37617 9.2623 2.90058 8.25721 2.72936C8.02258 2.69132 7.80381 2.84668 7.76259 3.07813C7.72137 3.30959 7.87356 3.53471 8.10819 3.57275Z"></path>
                    <path d="M14.9934 6.62681C14.7113 4.97174 13.9313 3.46569 12.7328 2.26719C11.5343 1.06869 10.0282 0.288712 8.37315 0.00652564C8.1417 -0.0346926 7.92292 0.123839 7.8817 0.355296C7.84366 0.589923 7.99902 0.808697 8.23364 0.849915C9.71116 1.1004 11.0587 1.80111 12.1304 2.86961C13.202 3.94129 13.8996 5.28881 14.1501 6.76632C14.1849 6.97559 14.3657 7.12143 14.5717 7.12143C14.5971 7.12143 14.6193 7.11826 14.6447 7.11509C14.8761 7.08022 15.0347 6.85827 14.9934 6.62681Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 15.0004H0V4.66711H4V15.0004ZM0.666626 14.3337H3.33337V5.33374H0.666626V14.3337Z"></path>
                    <path d="M15.334 15.0002H11.334V9.33362C11.334 8.78137 10.8862 8.33362 10.334 8.33362C9.78162 8.33362 9.33399 8.78137 9.33399 9.33362V15.0002H5.33398V4.66699H9.33399V5.33777C9.93775 4.90125 10.6639 4.6665 11.4089 4.66699C13.5714 4.66699 15.334 6.42114 15.334 8.57947V15.0002ZM12.0006 14.3336H14.6672V8.57947C14.6627 6.78381 13.2046 5.3313 11.4089 5.33362C10.5881 5.33362 9.81726 5.67944 9.24231 6.30444L8.66724 6.93359V5.33362H6.00061V14.3336H8.66724V9.33362C8.66724 8.41309 9.41345 7.66699 10.334 7.66699C11.2544 7.66699 12.0006 8.41309 12.0006 9.33362V14.3336Z"></path>
                    <path d="M2 4C0.895386 4 0 3.10461 0 2C0 0.895508 0.895386 0 2 0C3.10461 0 4 0.895508 4 2C3.99768 3.10364 3.10364 3.9978 2 4ZM2 0.666748C1.26367 0.666748 0.666626 1.26367 0.666626 2C0.666626 2.73645 1.26367 3.33337 2 3.33337C2.73633 3.33337 3.33337 2.73645 3.33337 2C3.33337 1.26367 2.73633 0.666748 2 0.666748Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.9205 2.68028C17.8141 2.50717 17.6193 2.40904 17.4166 2.42662L16.5191 2.50481L17.377 0.775362C17.4792 0.569381 17.4388 0.321212 17.2767 0.158192C17.1145 -0.00482808 16.8665 -0.0463829 16.6601 0.0547268L14.3894 1.16676C12.9866 0.426154 11.2339 0.645987 10.0279 1.74459C9.0214 2.66147 8.49233 4.07148 8.59098 5.4776C5.96026 5.21392 3.73346 3.70814 2.41671 1.27511C2.32935 1.11371 2.16556 1.00813 1.9825 0.99516C1.79909 0.982398 1.62239 1.06368 1.51319 1.21123C0.696511 2.31451 0.639207 3.82722 1.27944 5.07172C1.10295 5.02714 0.915149 4.96681 0.706882 4.89724C0.528464 4.83758 0.331764 4.87579 0.188572 4.99785C0.0453801 5.11992 -0.023456 5.30804 0.00716515 5.4937C0.260502 7.02961 1.15615 8.21002 2.57098 8.90872C2.38676 8.97288 2.19878 9.02498 2.00763 9.06481C1.81772 9.1044 1.66394 9.24334 1.60541 9.4283C1.54687 9.61322 1.59265 9.81537 1.72519 9.95701C2.74405 11.0461 4.21584 11.5821 5.26125 11.8392C4.07261 12.7701 2.78951 12.9259 0.925028 12.8618C0.709203 12.8553 0.510358 12.9769 0.41962 13.1725C0.328916 13.3682 0.364108 13.5992 0.509058 13.759C1.28629 14.6157 4.118 15.5817 7.09476 15.6541C7.2125 15.657 7.33259 15.6585 7.45522 15.6585C9.5453 15.6585 12.3076 15.2105 14.2903 13.2277C15.791 11.7271 16.7297 9.99945 17.0802 8.09306C17.3632 6.55331 17.1843 5.32031 17.0984 4.72771C17.092 4.68415 17.0853 4.63792 17.0798 4.59749L17.9194 3.24432C18.0265 3.07171 18.0269 2.85339 17.9205 2.68028ZM16.0359 4.88184C16.1952 5.97956 16.6798 9.31998 13.5312 12.4686C11.7009 14.2988 9.03511 14.6275 7.12085 14.581C5.48745 14.5412 4.02642 14.2288 2.96751 13.8726C3.39743 13.8198 3.78057 13.7385 4.14222 13.6261C5.13922 13.3162 5.9815 12.7586 6.79284 11.8712C6.92808 11.7233 6.96964 11.5125 6.9007 11.3243C6.83176 11.1362 6.66371 11.0021 6.46493 10.9766C5.95309 10.911 4.41514 10.6521 3.20407 9.81674C3.55307 9.674 3.88966 9.49537 4.21106 9.28219C4.38737 9.16518 4.47856 8.95558 4.44383 8.74686C4.40913 8.53817 4.25511 8.36924 4.05043 8.3156C3.0592 8.05572 1.86289 7.47423 1.31126 6.17615C1.66352 6.23789 2.04655 6.25283 2.45507 6.16125C2.64442 6.11885 2.79616 5.97752 2.85184 5.79161C2.90757 5.60571 2.85863 5.40419 2.72384 5.26462C2.03745 4.55369 1.78077 3.52916 2.00099 2.65247C2.72219 3.70649 3.63587 4.59356 4.68268 5.2494C6.02182 6.0884 7.58481 6.55208 9.20274 6.59016C9.36737 6.59364 9.5253 6.52178 9.63013 6.39423C9.7349 6.26672 9.77519 6.09807 9.73936 5.93695C9.461 4.68556 9.85802 3.35152 10.7508 2.53824C11.6769 1.69467 13.0455 1.5667 14.079 2.22725C14.2368 2.32811 14.4359 2.3394 14.6041 2.25699L15.713 1.7139L15.1326 2.88394C15.0464 3.05778 15.0607 3.26464 15.17 3.42492C15.2794 3.5852 15.4664 3.67418 15.66 3.6572L16.442 3.5891L16.0818 4.16971C15.9609 4.36458 15.9859 4.53748 16.0359 4.88184Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.888 0H4.11202C1.84465 0 0 1.84465 0 4.11205V10.888C0 13.1554 1.84465 15 4.11202 15H10.888C13.1554 15 15 13.1554 15 10.888V4.11205C15 1.84465 13.1554 0 10.888 0ZM14.1142 10.888C14.1142 12.6669 12.6669 14.1142 10.888 14.1142H4.11202C2.33309 14.1142 0.88582 12.6669 0.88582 10.888V4.11205C0.88582 2.33309 2.33309 0.88582 4.11202 0.88582H10.888C12.6669 0.88582 14.1142 2.33309 14.1142 4.11205V10.888Z"></path>
                    <path d="M7.50103 3.38684C5.23246 3.38684 3.38684 5.23246 3.38684 7.50103C3.38684 9.7696 5.23243 11.6152 7.50103 11.6152C9.7696 11.6152 11.6152 9.76958 11.6152 7.501C11.6152 5.23243 9.7696 3.38684 7.50103 3.38684ZM7.50103 10.7294C5.72089 10.7294 4.27263 9.28114 4.27263 7.501C4.27263 5.72086 5.72089 4.2726 7.50103 4.2726C9.2812 4.2726 10.7295 5.72089 10.7295 7.50103C10.7295 9.28117 9.2812 10.7294 7.50103 10.7294Z"></path>
                    <path d="M11.8605 1.88965C11.1712 1.88965 10.6105 2.45042 10.6105 3.13966C10.6105 3.8289 11.1712 4.38964 11.8605 4.38964C12.5497 4.38964 13.1104 3.82887 13.1104 3.13963C13.1104 2.45039 12.5497 1.88965 11.8605 1.88965ZM11.8605 3.50379C11.6597 3.50379 11.4963 3.34043 11.4963 3.13963C11.4963 2.93883 11.6597 2.77547 11.8605 2.77547C12.0613 2.77547 12.2246 2.93886 12.2246 3.13963C12.2246 3.3404 12.0613 3.50379 11.8605 3.50379Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="homec-agent-detail__sticky">
        <div className="homec-agent-detail__inside">
          <div className="homec-agent-detail__sticky--heading">
            <h2 className="homec-agent-detail__sticky--title">About Me</h2>
          </div>
          <p className="homec-agent-detail__sticky--text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority to have suffered alteration in some form, by injected
            humor. Ipsum available, but the a majority have suffered alteration
            in some form.
          </p>
        </div>
      </div>
      <div className="row mg-top-30">
        <div className="col-12 d-flex justify-content-end">
          <a
            className="homec-btn homec-btn__second"
            data-bs-toggle="modal"
            data-bs-target="#profile_view"
            onClick={toggleModal}
          >
            <span>Edit Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
