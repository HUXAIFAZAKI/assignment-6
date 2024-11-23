import React from "react";
import Image from "next/image";
import James from "@/../public/Team/James Nduku.png"
import JosephM from "@/../public/Team/Joseph Munyambu.png"
import JosephN from "@/../public/Team/Joseph Ngumbau.png"
import Erick from "@/../public/Team/Erick Kipkemboi.png"
import Stephen from "@/../public/Team/Stephen Kerubo.png"
import John from "@/../public/Team/John Leboo.png"

const Team = () => {
    return (
      <section className="flex flex-col items-center gap-4 h-screen bg-[#F7F7F7] mt-[18rem] pb-10">
      <div className="flex flex-col items-center gap-4 h-[25%] pt-10">
        <h2 className="text-[32px] font-bold">Our Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 sm:gap-13 md:gap-36 lg:gap-x-72">
        <div className="flex flex-col items-center gap-4">
          <Image src={James} alt="James" width={100} height={100}></Image>
          <span>
            <h2 className="font-bold text-center">James Nduku</h2>
            <p className="text-center">Marketing Coordinator</p>
          </span>
          <span className="flex flex-row gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5027 7.8057 13.0294 6.65957 12.1849 5.81508C11.3404 4.97059 10.1943 4.49734 9 4.5ZM6.25 9C6.25 10.5188 7.4812 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9Z"
                fill="black"
              />
            </svg>
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3061 2.7174C17.8417 3.33692 17.2803 3.87733 16.6436 4.31776C16.6436 4.47959 16.6436 4.64142 16.6436 4.81225C16.6487 7.7511 15.4748 10.5691 13.3851 12.6345C11.2953 14.6999 8.46451 15.8399 5.52736 15.7989C3.8293 15.8046 2.15299 15.4169 0.629735 14.6661C0.547595 14.6302 0.494625 14.549 0.494935 14.4593V14.3604C0.494935 14.2313 0.599545 14.1267 0.728585 14.1267C2.39774 14.0716 4.00733 13.4929 5.32965 12.4724C3.81884 12.4419 2.4595 11.5469 1.83391 10.1707C1.80232 10.0956 1.81215 10.0093 1.85988 9.9432C1.9076 9.8771 1.98632 9.8407 2.06757 9.8471C2.52674 9.8932 2.9905 9.8505 3.43352 9.7212C1.76571 9.375 0.512525 7.9904 0.333175 6.2957C0.326805 6.2144 0.363235 6.1357 0.429315 6.0879C0.495385 6.0402 0.581555 6.0303 0.656695 6.062C1.10426 6.2595 1.5874 6.3635 2.07655 6.3676C0.615155 5.40846 -0.0160751 3.58405 0.539865 1.92622C0.597255 1.76513 0.735125 1.64612 0.902815 1.61294C1.0705 1.57975 1.24328 1.63728 1.35764 1.76439C3.32971 3.86325 6.03935 5.11396 8.91521 5.25279C8.84161 4.95885 8.80542 4.65676 8.80742 4.35372C8.83432 2.76472 9.81751 1.34921 11.2967 0.769872C12.7758 0.190542 14.4582 0.562032 15.5563 1.71044C16.3047 1.56785 17.0283 1.31645 17.704 0.964212C17.7535 0.933312 17.8163 0.933312 17.8658 0.964212C17.8967 1.01373 17.8967 1.07652 17.8658 1.12604C17.5385 1.87552 16.9856 2.50412 16.2842 2.92419C16.8984 2.85296 17.5018 2.70807 18.0815 2.49264C18.1303 2.45942 18.1944 2.45942 18.2432 2.49264C18.2841 2.51134 18.3147 2.54711 18.3268 2.59042C18.3389 2.63373 18.3313 2.68018 18.3061 2.7174Z" fill="black"/>
            </svg>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.33331 0C4.36476 0 0.333313 4.03145 0.333313 9C0.333313 13.9686 4.36476 18 9.33331 18C14.2921 18 18.3333 13.9686 18.3333 9C18.3333 4.03145 14.2921 0 9.33331 0ZM15.278 4.14859C16.3517 5.45662 16.996 7.1258 17.0155 8.9317C16.7617 8.8829 14.2237 8.3655 11.6663 8.6876C11.6077 8.5607 11.5589 8.4241 11.5003 8.2874C11.3441 7.9165 11.1685 7.5358 10.9927 7.1746C13.8235 6.0228 15.112 4.36334 15.278 4.14859ZM9.33331 1.32755C11.2856 1.32755 13.0719 2.05966 14.4288 3.26031C14.2921 3.45553 13.1305 5.00759 10.3973 6.03253C9.13811 3.71909 7.74221 1.82538 7.52751 1.53254C8.10331 1.39588 8.70861 1.32755 9.33331 1.32755ZM6.06327 2.04989C6.26825 2.32321 7.63481 4.22668 8.91361 6.49131C5.32138 7.448 2.14893 7.4284 1.80728 7.4284C2.30511 5.04664 3.91574 3.06507 6.06327 2.04989ZM1.64134 9.0098C1.64134 8.9317 1.64134 8.8536 1.64134 8.7755C1.97322 8.7852 5.70207 8.8341 9.53831 7.6822C9.76281 8.1117 9.96781 8.551 10.163 8.9902C10.0654 9.0195 9.95801 9.0488 9.86041 9.0781C5.8973 10.3568 3.78884 13.8514 3.61314 14.1442C2.39296 12.7874 1.64134 10.9816 1.64134 9.0098ZM9.33331 16.692C7.55671 16.692 5.91683 16.0868 4.61856 15.0716C4.75522 14.7885 6.31702 11.782 10.6511 10.269C10.6706 10.2592 10.6804 10.2592 10.6999 10.2495C11.7834 13.051 12.2227 15.4034 12.3398 16.077C11.4125 16.4772 10.3973 16.692 9.33331 16.692ZM13.6185 15.3742C13.5405 14.9056 13.1305 12.6605 12.125 9.898C14.5361 9.5173 16.6446 10.1421 16.9082 10.23C16.5763 12.3677 15.3463 14.2126 13.6185 15.3742Z" fill="black"/>
            </svg>
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={JosephM} alt="James" width={100} height={100}></Image>
          <span>
            <h2 className="font-bold text-center">Joseph Munyambu</h2>
            <p className="text-center">Nursing Assistant</p>
          </span>
          <span className="flex flex-row gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5027 7.8057 13.0294 6.65957 12.1849 5.81508C11.3404 4.97059 10.1943 4.49734 9 4.5ZM6.25 9C6.25 10.5188 7.4812 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9Z"
                fill="black"
              />
            </svg>
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3061 2.7174C17.8417 3.33692 17.2803 3.87733 16.6436 4.31776C16.6436 4.47959 16.6436 4.64142 16.6436 4.81225C16.6487 7.7511 15.4748 10.5691 13.3851 12.6345C11.2953 14.6999 8.46451 15.8399 5.52736 15.7989C3.8293 15.8046 2.15299 15.4169 0.629735 14.6661C0.547595 14.6302 0.494625 14.549 0.494935 14.4593V14.3604C0.494935 14.2313 0.599545 14.1267 0.728585 14.1267C2.39774 14.0716 4.00733 13.4929 5.32965 12.4724C3.81884 12.4419 2.4595 11.5469 1.83391 10.1707C1.80232 10.0956 1.81215 10.0093 1.85988 9.9432C1.9076 9.8771 1.98632 9.8407 2.06757 9.8471C2.52674 9.8932 2.9905 9.8505 3.43352 9.7212C1.76571 9.375 0.512525 7.9904 0.333175 6.2957C0.326805 6.2144 0.363235 6.1357 0.429315 6.0879C0.495385 6.0402 0.581555 6.0303 0.656695 6.062C1.10426 6.2595 1.5874 6.3635 2.07655 6.3676C0.615155 5.40846 -0.0160751 3.58405 0.539865 1.92622C0.597255 1.76513 0.735125 1.64612 0.902815 1.61294C1.0705 1.57975 1.24328 1.63728 1.35764 1.76439C3.32971 3.86325 6.03935 5.11396 8.91521 5.25279C8.84161 4.95885 8.80542 4.65676 8.80742 4.35372C8.83432 2.76472 9.81751 1.34921 11.2967 0.769872C12.7758 0.190542 14.4582 0.562032 15.5563 1.71044C16.3047 1.56785 17.0283 1.31645 17.704 0.964212C17.7535 0.933312 17.8163 0.933312 17.8658 0.964212C17.8967 1.01373 17.8967 1.07652 17.8658 1.12604C17.5385 1.87552 16.9856 2.50412 16.2842 2.92419C16.8984 2.85296 17.5018 2.70807 18.0815 2.49264C18.1303 2.45942 18.1944 2.45942 18.2432 2.49264C18.2841 2.51134 18.3147 2.54711 18.3268 2.59042C18.3389 2.63373 18.3313 2.68018 18.3061 2.7174Z" fill="black"/>
            </svg>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.33331 0C4.36476 0 0.333313 4.03145 0.333313 9C0.333313 13.9686 4.36476 18 9.33331 18C14.2921 18 18.3333 13.9686 18.3333 9C18.3333 4.03145 14.2921 0 9.33331 0ZM15.278 4.14859C16.3517 5.45662 16.996 7.1258 17.0155 8.9317C16.7617 8.8829 14.2237 8.3655 11.6663 8.6876C11.6077 8.5607 11.5589 8.4241 11.5003 8.2874C11.3441 7.9165 11.1685 7.5358 10.9927 7.1746C13.8235 6.0228 15.112 4.36334 15.278 4.14859ZM9.33331 1.32755C11.2856 1.32755 13.0719 2.05966 14.4288 3.26031C14.2921 3.45553 13.1305 5.00759 10.3973 6.03253C9.13811 3.71909 7.74221 1.82538 7.52751 1.53254C8.10331 1.39588 8.70861 1.32755 9.33331 1.32755ZM6.06327 2.04989C6.26825 2.32321 7.63481 4.22668 8.91361 6.49131C5.32138 7.448 2.14893 7.4284 1.80728 7.4284C2.30511 5.04664 3.91574 3.06507 6.06327 2.04989ZM1.64134 9.0098C1.64134 8.9317 1.64134 8.8536 1.64134 8.7755C1.97322 8.7852 5.70207 8.8341 9.53831 7.6822C9.76281 8.1117 9.96781 8.551 10.163 8.9902C10.0654 9.0195 9.95801 9.0488 9.86041 9.0781C5.8973 10.3568 3.78884 13.8514 3.61314 14.1442C2.39296 12.7874 1.64134 10.9816 1.64134 9.0098ZM9.33331 16.692C7.55671 16.692 5.91683 16.0868 4.61856 15.0716C4.75522 14.7885 6.31702 11.782 10.6511 10.269C10.6706 10.2592 10.6804 10.2592 10.6999 10.2495C11.7834 13.051 12.2227 15.4034 12.3398 16.077C11.4125 16.4772 10.3973 16.692 9.33331 16.692ZM13.6185 15.3742C13.5405 14.9056 13.1305 12.6605 12.125 9.898C14.5361 9.5173 16.6446 10.1421 16.9082 10.23C16.5763 12.3677 15.3463 14.2126 13.6185 15.3742Z" fill="black"/>
            </svg>
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={JosephN} alt="James" width={100} height={100}></Image>
          <span>
            <h2 className="font-bold text-center">Joseph Ngumbau</h2>
            <p className="text-center">Medical Assistant</p>
          </span>
          <span className="flex flex-row gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5027 7.8057 13.0294 6.65957 12.1849 5.81508C11.3404 4.97059 10.1943 4.49734 9 4.5ZM6.25 9C6.25 10.5188 7.4812 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9Z"
                fill="black"
              />
            </svg>
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3061 2.7174C17.8417 3.33692 17.2803 3.87733 16.6436 4.31776C16.6436 4.47959 16.6436 4.64142 16.6436 4.81225C16.6487 7.7511 15.4748 10.5691 13.3851 12.6345C11.2953 14.6999 8.46451 15.8399 5.52736 15.7989C3.8293 15.8046 2.15299 15.4169 0.629735 14.6661C0.547595 14.6302 0.494625 14.549 0.494935 14.4593V14.3604C0.494935 14.2313 0.599545 14.1267 0.728585 14.1267C2.39774 14.0716 4.00733 13.4929 5.32965 12.4724C3.81884 12.4419 2.4595 11.5469 1.83391 10.1707C1.80232 10.0956 1.81215 10.0093 1.85988 9.9432C1.9076 9.8771 1.98632 9.8407 2.06757 9.8471C2.52674 9.8932 2.9905 9.8505 3.43352 9.7212C1.76571 9.375 0.512525 7.9904 0.333175 6.2957C0.326805 6.2144 0.363235 6.1357 0.429315 6.0879C0.495385 6.0402 0.581555 6.0303 0.656695 6.062C1.10426 6.2595 1.5874 6.3635 2.07655 6.3676C0.615155 5.40846 -0.0160751 3.58405 0.539865 1.92622C0.597255 1.76513 0.735125 1.64612 0.902815 1.61294C1.0705 1.57975 1.24328 1.63728 1.35764 1.76439C3.32971 3.86325 6.03935 5.11396 8.91521 5.25279C8.84161 4.95885 8.80542 4.65676 8.80742 4.35372C8.83432 2.76472 9.81751 1.34921 11.2967 0.769872C12.7758 0.190542 14.4582 0.562032 15.5563 1.71044C16.3047 1.56785 17.0283 1.31645 17.704 0.964212C17.7535 0.933312 17.8163 0.933312 17.8658 0.964212C17.8967 1.01373 17.8967 1.07652 17.8658 1.12604C17.5385 1.87552 16.9856 2.50412 16.2842 2.92419C16.8984 2.85296 17.5018 2.70807 18.0815 2.49264C18.1303 2.45942 18.1944 2.45942 18.2432 2.49264C18.2841 2.51134 18.3147 2.54711 18.3268 2.59042C18.3389 2.63373 18.3313 2.68018 18.3061 2.7174Z" fill="black"/>
            </svg>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.33331 0C4.36476 0 0.333313 4.03145 0.333313 9C0.333313 13.9686 4.36476 18 9.33331 18C14.2921 18 18.3333 13.9686 18.3333 9C18.3333 4.03145 14.2921 0 9.33331 0ZM15.278 4.14859C16.3517 5.45662 16.996 7.1258 17.0155 8.9317C16.7617 8.8829 14.2237 8.3655 11.6663 8.6876C11.6077 8.5607 11.5589 8.4241 11.5003 8.2874C11.3441 7.9165 11.1685 7.5358 10.9927 7.1746C13.8235 6.0228 15.112 4.36334 15.278 4.14859ZM9.33331 1.32755C11.2856 1.32755 13.0719 2.05966 14.4288 3.26031C14.2921 3.45553 13.1305 5.00759 10.3973 6.03253C9.13811 3.71909 7.74221 1.82538 7.52751 1.53254C8.10331 1.39588 8.70861 1.32755 9.33331 1.32755ZM6.06327 2.04989C6.26825 2.32321 7.63481 4.22668 8.91361 6.49131C5.32138 7.448 2.14893 7.4284 1.80728 7.4284C2.30511 5.04664 3.91574 3.06507 6.06327 2.04989ZM1.64134 9.0098C1.64134 8.9317 1.64134 8.8536 1.64134 8.7755C1.97322 8.7852 5.70207 8.8341 9.53831 7.6822C9.76281 8.1117 9.96781 8.551 10.163 8.9902C10.0654 9.0195 9.95801 9.0488 9.86041 9.0781C5.8973 10.3568 3.78884 13.8514 3.61314 14.1442C2.39296 12.7874 1.64134 10.9816 1.64134 9.0098ZM9.33331 16.692C7.55671 16.692 5.91683 16.0868 4.61856 15.0716C4.75522 14.7885 6.31702 11.782 10.6511 10.269C10.6706 10.2592 10.6804 10.2592 10.6999 10.2495C11.7834 13.051 12.2227 15.4034 12.3398 16.077C11.4125 16.4772 10.3973 16.692 9.33331 16.692ZM13.6185 15.3742C13.5405 14.9056 13.1305 12.6605 12.125 9.898C14.5361 9.5173 16.6446 10.1421 16.9082 10.23C16.5763 12.3677 15.3463 14.2126 13.6185 15.3742Z" fill="black"/>
            </svg>
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={Erick} alt="James" width={100} height={100}></Image>
          <span>
            <h2 className="font-bold text-center">Erick Kipkemboi</h2>
            <p className="text-center">Web Designer</p>
          </span>
          <span className="flex flex-row gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5027 7.8057 13.0294 6.65957 12.1849 5.81508C11.3404 4.97059 10.1943 4.49734 9 4.5ZM6.25 9C6.25 10.5188 7.4812 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9Z"
                fill="black"
              />
            </svg>
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3061 2.7174C17.8417 3.33692 17.2803 3.87733 16.6436 4.31776C16.6436 4.47959 16.6436 4.64142 16.6436 4.81225C16.6487 7.7511 15.4748 10.5691 13.3851 12.6345C11.2953 14.6999 8.46451 15.8399 5.52736 15.7989C3.8293 15.8046 2.15299 15.4169 0.629735 14.6661C0.547595 14.6302 0.494625 14.549 0.494935 14.4593V14.3604C0.494935 14.2313 0.599545 14.1267 0.728585 14.1267C2.39774 14.0716 4.00733 13.4929 5.32965 12.4724C3.81884 12.4419 2.4595 11.5469 1.83391 10.1707C1.80232 10.0956 1.81215 10.0093 1.85988 9.9432C1.9076 9.8771 1.98632 9.8407 2.06757 9.8471C2.52674 9.8932 2.9905 9.8505 3.43352 9.7212C1.76571 9.375 0.512525 7.9904 0.333175 6.2957C0.326805 6.2144 0.363235 6.1357 0.429315 6.0879C0.495385 6.0402 0.581555 6.0303 0.656695 6.062C1.10426 6.2595 1.5874 6.3635 2.07655 6.3676C0.615155 5.40846 -0.0160751 3.58405 0.539865 1.92622C0.597255 1.76513 0.735125 1.64612 0.902815 1.61294C1.0705 1.57975 1.24328 1.63728 1.35764 1.76439C3.32971 3.86325 6.03935 5.11396 8.91521 5.25279C8.84161 4.95885 8.80542 4.65676 8.80742 4.35372C8.83432 2.76472 9.81751 1.34921 11.2967 0.769872C12.7758 0.190542 14.4582 0.562032 15.5563 1.71044C16.3047 1.56785 17.0283 1.31645 17.704 0.964212C17.7535 0.933312 17.8163 0.933312 17.8658 0.964212C17.8967 1.01373 17.8967 1.07652 17.8658 1.12604C17.5385 1.87552 16.9856 2.50412 16.2842 2.92419C16.8984 2.85296 17.5018 2.70807 18.0815 2.49264C18.1303 2.45942 18.1944 2.45942 18.2432 2.49264C18.2841 2.51134 18.3147 2.54711 18.3268 2.59042C18.3389 2.63373 18.3313 2.68018 18.3061 2.7174Z" fill="black"/>
            </svg>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.33331 0C4.36476 0 0.333313 4.03145 0.333313 9C0.333313 13.9686 4.36476 18 9.33331 18C14.2921 18 18.3333 13.9686 18.3333 9C18.3333 4.03145 14.2921 0 9.33331 0ZM15.278 4.14859C16.3517 5.45662 16.996 7.1258 17.0155 8.9317C16.7617 8.8829 14.2237 8.3655 11.6663 8.6876C11.6077 8.5607 11.5589 8.4241 11.5003 8.2874C11.3441 7.9165 11.1685 7.5358 10.9927 7.1746C13.8235 6.0228 15.112 4.36334 15.278 4.14859ZM9.33331 1.32755C11.2856 1.32755 13.0719 2.05966 14.4288 3.26031C14.2921 3.45553 13.1305 5.00759 10.3973 6.03253C9.13811 3.71909 7.74221 1.82538 7.52751 1.53254C8.10331 1.39588 8.70861 1.32755 9.33331 1.32755ZM6.06327 2.04989C6.26825 2.32321 7.63481 4.22668 8.91361 6.49131C5.32138 7.448 2.14893 7.4284 1.80728 7.4284C2.30511 5.04664 3.91574 3.06507 6.06327 2.04989ZM1.64134 9.0098C1.64134 8.9317 1.64134 8.8536 1.64134 8.7755C1.97322 8.7852 5.70207 8.8341 9.53831 7.6822C9.76281 8.1117 9.96781 8.551 10.163 8.9902C10.0654 9.0195 9.95801 9.0488 9.86041 9.0781C5.8973 10.3568 3.78884 13.8514 3.61314 14.1442C2.39296 12.7874 1.64134 10.9816 1.64134 9.0098ZM9.33331 16.692C7.55671 16.692 5.91683 16.0868 4.61856 15.0716C4.75522 14.7885 6.31702 11.782 10.6511 10.269C10.6706 10.2592 10.6804 10.2592 10.6999 10.2495C11.7834 13.051 12.2227 15.4034 12.3398 16.077C11.4125 16.4772 10.3973 16.692 9.33331 16.692ZM13.6185 15.3742C13.5405 14.9056 13.1305 12.6605 12.125 9.898C14.5361 9.5173 16.6446 10.1421 16.9082 10.23C16.5763 12.3677 15.3463 14.2126 13.6185 15.3742Z" fill="black"/>
            </svg>
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={Stephen} alt="James" width={100} height={100}></Image>
          <span>
            <h2 className="font-bold text-center">Stephen Kerubo</h2>
            <p className="text-center">President of Sales</p>
          </span>
          <span className="flex flex-row gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5027 7.8057 13.0294 6.65957 12.1849 5.81508C11.3404 4.97059 10.1943 4.49734 9 4.5ZM6.25 9C6.25 10.5188 7.4812 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9Z"
                fill="black"
              />
            </svg>
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3061 2.7174C17.8417 3.33692 17.2803 3.87733 16.6436 4.31776C16.6436 4.47959 16.6436 4.64142 16.6436 4.81225C16.6487 7.7511 15.4748 10.5691 13.3851 12.6345C11.2953 14.6999 8.46451 15.8399 5.52736 15.7989C3.8293 15.8046 2.15299 15.4169 0.629735 14.6661C0.547595 14.6302 0.494625 14.549 0.494935 14.4593V14.3604C0.494935 14.2313 0.599545 14.1267 0.728585 14.1267C2.39774 14.0716 4.00733 13.4929 5.32965 12.4724C3.81884 12.4419 2.4595 11.5469 1.83391 10.1707C1.80232 10.0956 1.81215 10.0093 1.85988 9.9432C1.9076 9.8771 1.98632 9.8407 2.06757 9.8471C2.52674 9.8932 2.9905 9.8505 3.43352 9.7212C1.76571 9.375 0.512525 7.9904 0.333175 6.2957C0.326805 6.2144 0.363235 6.1357 0.429315 6.0879C0.495385 6.0402 0.581555 6.0303 0.656695 6.062C1.10426 6.2595 1.5874 6.3635 2.07655 6.3676C0.615155 5.40846 -0.0160751 3.58405 0.539865 1.92622C0.597255 1.76513 0.735125 1.64612 0.902815 1.61294C1.0705 1.57975 1.24328 1.63728 1.35764 1.76439C3.32971 3.86325 6.03935 5.11396 8.91521 5.25279C8.84161 4.95885 8.80542 4.65676 8.80742 4.35372C8.83432 2.76472 9.81751 1.34921 11.2967 0.769872C12.7758 0.190542 14.4582 0.562032 15.5563 1.71044C16.3047 1.56785 17.0283 1.31645 17.704 0.964212C17.7535 0.933312 17.8163 0.933312 17.8658 0.964212C17.8967 1.01373 17.8967 1.07652 17.8658 1.12604C17.5385 1.87552 16.9856 2.50412 16.2842 2.92419C16.8984 2.85296 17.5018 2.70807 18.0815 2.49264C18.1303 2.45942 18.1944 2.45942 18.2432 2.49264C18.2841 2.51134 18.3147 2.54711 18.3268 2.59042C18.3389 2.63373 18.3313 2.68018 18.3061 2.7174Z" fill="black"/>
            </svg>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.33331 0C4.36476 0 0.333313 4.03145 0.333313 9C0.333313 13.9686 4.36476 18 9.33331 18C14.2921 18 18.3333 13.9686 18.3333 9C18.3333 4.03145 14.2921 0 9.33331 0ZM15.278 4.14859C16.3517 5.45662 16.996 7.1258 17.0155 8.9317C16.7617 8.8829 14.2237 8.3655 11.6663 8.6876C11.6077 8.5607 11.5589 8.4241 11.5003 8.2874C11.3441 7.9165 11.1685 7.5358 10.9927 7.1746C13.8235 6.0228 15.112 4.36334 15.278 4.14859ZM9.33331 1.32755C11.2856 1.32755 13.0719 2.05966 14.4288 3.26031C14.2921 3.45553 13.1305 5.00759 10.3973 6.03253C9.13811 3.71909 7.74221 1.82538 7.52751 1.53254C8.10331 1.39588 8.70861 1.32755 9.33331 1.32755ZM6.06327 2.04989C6.26825 2.32321 7.63481 4.22668 8.91361 6.49131C5.32138 7.448 2.14893 7.4284 1.80728 7.4284C2.30511 5.04664 3.91574 3.06507 6.06327 2.04989ZM1.64134 9.0098C1.64134 8.9317 1.64134 8.8536 1.64134 8.7755C1.97322 8.7852 5.70207 8.8341 9.53831 7.6822C9.76281 8.1117 9.96781 8.551 10.163 8.9902C10.0654 9.0195 9.95801 9.0488 9.86041 9.0781C5.8973 10.3568 3.78884 13.8514 3.61314 14.1442C2.39296 12.7874 1.64134 10.9816 1.64134 9.0098ZM9.33331 16.692C7.55671 16.692 5.91683 16.0868 4.61856 15.0716C4.75522 14.7885 6.31702 11.782 10.6511 10.269C10.6706 10.2592 10.6804 10.2592 10.6999 10.2495C11.7834 13.051 12.2227 15.4034 12.3398 16.077C11.4125 16.4772 10.3973 16.692 9.33331 16.692ZM13.6185 15.3742C13.5405 14.9056 13.1305 12.6605 12.125 9.898C14.5361 9.5173 16.6446 10.1421 16.9082 10.23C16.5763 12.3677 15.3463 14.2126 13.6185 15.3742Z" fill="black"/>
            </svg>
          </span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={John} alt="James" width={100} height={100}></Image>
          <span>
            <h2 className="font-bold text-center">John Leboo</h2>
            <p className="text-center">Dog Trainer</p>
          </span>
          <span className="flex flex-row gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5027 7.8057 13.0294 6.65957 12.1849 5.81508C11.3404 4.97059 10.1943 4.49734 9 4.5ZM6.25 9C6.25 10.5188 7.4812 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.4812 10.5188 6.25 9 6.25C7.4812 6.25 6.25 7.4812 6.25 9Z"
                fill="black"
              />
            </svg>
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3061 2.7174C17.8417 3.33692 17.2803 3.87733 16.6436 4.31776C16.6436 4.47959 16.6436 4.64142 16.6436 4.81225C16.6487 7.7511 15.4748 10.5691 13.3851 12.6345C11.2953 14.6999 8.46451 15.8399 5.52736 15.7989C3.8293 15.8046 2.15299 15.4169 0.629735 14.6661C0.547595 14.6302 0.494625 14.549 0.494935 14.4593V14.3604C0.494935 14.2313 0.599545 14.1267 0.728585 14.1267C2.39774 14.0716 4.00733 13.4929 5.32965 12.4724C3.81884 12.4419 2.4595 11.5469 1.83391 10.1707C1.80232 10.0956 1.81215 10.0093 1.85988 9.9432C1.9076 9.8771 1.98632 9.8407 2.06757 9.8471C2.52674 9.8932 2.9905 9.8505 3.43352 9.7212C1.76571 9.375 0.512525 7.9904 0.333175 6.2957C0.326805 6.2144 0.363235 6.1357 0.429315 6.0879C0.495385 6.0402 0.581555 6.0303 0.656695 6.062C1.10426 6.2595 1.5874 6.3635 2.07655 6.3676C0.615155 5.40846 -0.0160751 3.58405 0.539865 1.92622C0.597255 1.76513 0.735125 1.64612 0.902815 1.61294C1.0705 1.57975 1.24328 1.63728 1.35764 1.76439C3.32971 3.86325 6.03935 5.11396 8.91521 5.25279C8.84161 4.95885 8.80542 4.65676 8.80742 4.35372C8.83432 2.76472 9.81751 1.34921 11.2967 0.769872C12.7758 0.190542 14.4582 0.562032 15.5563 1.71044C16.3047 1.56785 17.0283 1.31645 17.704 0.964212C17.7535 0.933312 17.8163 0.933312 17.8658 0.964212C17.8967 1.01373 17.8967 1.07652 17.8658 1.12604C17.5385 1.87552 16.9856 2.50412 16.2842 2.92419C16.8984 2.85296 17.5018 2.70807 18.0815 2.49264C18.1303 2.45942 18.1944 2.45942 18.2432 2.49264C18.2841 2.51134 18.3147 2.54711 18.3268 2.59042C18.3389 2.63373 18.3313 2.68018 18.3061 2.7174Z" fill="black"/>
            </svg>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.33331 0C4.36476 0 0.333313 4.03145 0.333313 9C0.333313 13.9686 4.36476 18 9.33331 18C14.2921 18 18.3333 13.9686 18.3333 9C18.3333 4.03145 14.2921 0 9.33331 0ZM15.278 4.14859C16.3517 5.45662 16.996 7.1258 17.0155 8.9317C16.7617 8.8829 14.2237 8.3655 11.6663 8.6876C11.6077 8.5607 11.5589 8.4241 11.5003 8.2874C11.3441 7.9165 11.1685 7.5358 10.9927 7.1746C13.8235 6.0228 15.112 4.36334 15.278 4.14859ZM9.33331 1.32755C11.2856 1.32755 13.0719 2.05966 14.4288 3.26031C14.2921 3.45553 13.1305 5.00759 10.3973 6.03253C9.13811 3.71909 7.74221 1.82538 7.52751 1.53254C8.10331 1.39588 8.70861 1.32755 9.33331 1.32755ZM6.06327 2.04989C6.26825 2.32321 7.63481 4.22668 8.91361 6.49131C5.32138 7.448 2.14893 7.4284 1.80728 7.4284C2.30511 5.04664 3.91574 3.06507 6.06327 2.04989ZM1.64134 9.0098C1.64134 8.9317 1.64134 8.8536 1.64134 8.7755C1.97322 8.7852 5.70207 8.8341 9.53831 7.6822C9.76281 8.1117 9.96781 8.551 10.163 8.9902C10.0654 9.0195 9.95801 9.0488 9.86041 9.0781C5.8973 10.3568 3.78884 13.8514 3.61314 14.1442C2.39296 12.7874 1.64134 10.9816 1.64134 9.0098ZM9.33331 16.692C7.55671 16.692 5.91683 16.0868 4.61856 15.0716C4.75522 14.7885 6.31702 11.782 10.6511 10.269C10.6706 10.2592 10.6804 10.2592 10.6999 10.2495C11.7834 13.051 12.2227 15.4034 12.3398 16.077C11.4125 16.4772 10.3973 16.692 9.33331 16.692ZM13.6185 15.3742C13.5405 14.9056 13.1305 12.6605 12.125 9.898C14.5361 9.5173 16.6446 10.1421 16.9082 10.23C16.5763 12.3677 15.3463 14.2126 13.6185 15.3742Z" fill="black"/>
            </svg>
          </span>
        </div>
      </div>
      
    </section>
    );
};

export default Team;