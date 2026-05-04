"use client";


export function TituloEstadoAgentes() {
  return (
    <div className="mx-auto sm:mb-0 text-center my-0 md:my-12 px-3">
      <div className="text-title-ttl text-2xl sm:text-2xl font-bold tracking-tight md:text-4xl">
        <div className="relative inline-flex items-center whitespace-nowrap w-fit">
          <span>Título de la sección</span>
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute inset-0 border border-primary-color-text" />
            <div
              className="pointer-events-none absolute"
              style={{
                left: "100%",
                top: "100%",
                marginLeft: "4px",
                marginTop: "4px",
                transform: "rotate(-90deg)"
              }}
            >
              <svg
                className="h-5 w-5 text-primary-color-text"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <p className="px-2 mt-2 sm:mt-2 text-center text-sm sm:text-base text-title-desc">
        Lorem dolor sit met consectetu adipisicing elit. Quisquam, quod. lo
        adipisicing elit. Quisquam.
      </p>
    </div>
  );
}
