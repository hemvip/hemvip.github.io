import cn from 'clsx'


export function SkipIcon({
  children,
  className,
  'data-language': _language,
  ...props
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.75 5C15.5449 5 17 6.45507 17 8.25V8.423L20.8639 6.105C21.3638 5.80486 22 6.16493 22 6.748V12.8096C21.5557 12.3832 21.051 12.0194 20.5 11.7322V8.0731L17 10.1745V11.0189C16.4805 11.0585 15.9782 11.159 15.5 11.3135V8.25C15.5 7.2835 14.7165 6.5 13.75 6.5H5.25C4.2835 6.5 3.5 7.2835 3.5 8.25V16.75C3.5 17.7165 4.2835 18.5 5.25 18.5H11.0764C11.1572 19.0232 11.3004 19.5258 11.4982 20H5.25C3.45507 20 2 18.5449 2 16.75V8.25C2 6.45507 3.45507 5 5.25 5H13.75ZM23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM13.5 17.5C13.5 18.3335 13.755 19.1075 14.1911 19.7482L19.7482 14.1911C19.1075 13.755 18.3335 13.5 17.5 13.5C15.2909 13.5 13.5 15.2909 13.5 17.5ZM17.5 21.5C19.7091 21.5 21.5 19.7091 21.5 17.5C21.5 16.6665 21.245 15.8925 20.8089 15.2518L15.2518 20.8089C15.8925 21.245 16.6665 21.5 17.5 21.5Z" />
    </svg>
  )
}