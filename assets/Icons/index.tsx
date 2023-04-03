export const CloseIcon = ({ width = 10, height = 10, className = '' }) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 10 10"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.41 5L9.7 1.71C9.89 1.53 10 1.28 10 1C10 0.45 9.55 0 9 0C8.72 0 8.47 0.11 8.29 0.29L5 3.59L1.71 0.29C1.53 0.11 1.28 0 1 0C0.45 0 0 0.45 0 1C0 1.28 0.11 1.53 0.29 1.71L3.59 5L0.3 8.29C0.11 8.47 0 8.72 0 9C0 9.55 0.45 10 1 10C1.28 10 1.53 9.89 1.71 9.71L5 6.41L8.29 9.7C8.47 9.89 8.72 10 9 10C9.55 10 10 9.55 10 9C10 8.72 9.89 8.47 9.71 8.29L6.41 5Z"
    />
  </svg>
);

export const LoadingIcon = ({width = 16, height = 16, className=''}) => (
  <svg 
    width={width}
    height={height} 
    className={className}
    viewBox="0 0 50 50"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path 
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" 
    />
  </svg>
)