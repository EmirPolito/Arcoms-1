import { cn } from "@/lib/utils"
import { Marquee } from "@/app/components/ui/12-testimonios-ui"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
    {
    name: "juli",
    username: "@juli",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "liz",
    username: "@liz",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "ted",
    username: "@ted",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

/*  Dividir en hasta 4 filas reales */
const chunkSize = Math.ceil(reviews.length / 4)
const rows = Array.from({ length: 4 }, (_, i) =>
  reviews.slice(i * chunkSize, (i + 1) * chunkSize)
)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-63 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-10/[.1]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="33" height="33" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm">{body}</blockquote>
    </figure>
  )
}

export function Component12() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {/* Título */}
      <h2 className="mb-2 text-3xl font-bold tracking-tight text-center">
        Testimonios
      </h2>
      <p className="mb-10 text-1xl font-normal  text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam illum, repellendus facere eaque quis dolores eos eius sunt enim?
      </p>

      {rows.map(
        (row, index) =>
          row.length > 0 && (
            <Marquee
              key={index}
              pauseOnHover
              reverse={index % 2 !== 0}
              className="[--duration:40s]"
            >
              {row.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          )
      )}

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
    </div>
  )
}
