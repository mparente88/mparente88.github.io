import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function Endorsements() {
  const endorsements = [
    {
      name: "Jeremy Taubman",
      title: "Senior Software Engineer",
      feedback: "I cannot recommend her enough for any position in tech. Do not miss the chance to have someone this strong working on your side.",
    },
    {
      name: "Ashley Sands",
      title: "Instructor at General Assembly",
      feedback: "Molly has an exceptional ability to grasp concepts quickly. She regularly went beyond the curriculum, pushing herself to deepen her understanding and explore related areas.",
    },
  ]

  return (
    <section id="endorsements" className="endorsements section">
      <h2>Endorsements</h2>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {endorsements.map((endorsement, index) => (
          <SwiperSlide key={index}>
            <div className="endorsement-card">
              <p>&quot;{endorsement.feedback}&quot;</p>
              <h4>- {endorsement.name}</h4>
              {endorsement.title && <p className="endorsement-title">{endorsement.title}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
