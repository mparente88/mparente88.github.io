import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function Endorsements() {
  const endorsements = [
    {
      name: "Jeremy Taubman",
      title: "Senior Software Engineer",
      feedback: "In both Front and Back End coding, in styling, planning, and execution, Molly's skills were incredible to see and work with... I cannot recommend her enough for any position in tech. Do not miss the chance to have someone this strong working on your side.",
    },
    {
      name: "Ashley Sands",
      title: "Instructor at General Assembly",
      feedback: "Molly has an exceptional ability to grasp concepts quickly. She regularly went beyond the curriculum, pushing herself to deepen her understanding and explore related areas.",
    },
    {
      name: "Kisha Martin",
      title: "UX Designer and Software Engineer",
      feedback: "What sets Molly apart is her drive for excellence and her ability to tackle challenges with ease. She demonstrates a deep understanding of coding concepts and approaches every task with a high level of professionalism. Her work ethic and dedication make it clear that she has an incredibly bright future in tech.",
    },
    {
      name: "Rhiannon O'Brien",
      title: "Software Engineer",
      feedback: "Everything she creates is well thought out and considers not just what she would like to do, but how users would try to interact with the site... I would feel relieved knowing I had such a fast learner on my team.",
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
