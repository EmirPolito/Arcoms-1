import { InfiniteSlider } from '@/app/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/app/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-10">
            <div className="group relative m-auto max-w-8xl px-15">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-4">
                        <p className="text-end text-sm">Desarrollado con las siguientes tecnologías</p>
                    </div>
                    <div className="relative py-7 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-8 w-fit dark:invert"
                                    src="/icons/GitHub_dark.svg"
                                    alt="Git Hub"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-9.5 w-fit dark:invert"
                                    src="/icons/next.svg"
                                    alt="Next"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-8 w-fit dark:invert"
                                    src="/icons/OpenAI_dark.svg"
                                    alt="ChatGPT"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-8 w-fit dark:invert"
                                    src="/icons/React_dark.svg"
                                    alt="React"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="/icons/tailwindcss.svg"
                                    alt="Tailwindcss"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-8 w-fit dark:invert"
                                    src="/icons/typescript.svg"
                                    alt="Typescript"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="/icons/Vercel_dark.svg"
                                    alt="Vercel"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-8 w-fit dark:invert"
                                    src="/icons/React_light.svg"
                                    alt="React"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}