import { motion } from "framer-motion";

export default function FeatureCard({
  image,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        group
        w-full
        min-w-0
        overflow-hidden
        rounded-[18px]
        bg-white
        p-4
        shadow-[0_2px_6px_rgba(0,0,0,0.08)]
        transition-shadow
        duration-300
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        sm:rounded-[19px]
        sm:p-5
        lg:rounded-[20px]
        lg:p-5
        
      "
    >
      <div className="flex flex-col">

        {/* Image */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-[4px]
            bg-[#F3F5F7]
          "
        >
          <img
            src={image}
            alt={title}
            className="
              block
              aspect-[366/218]
              w-full
              object-cover
              object-top
              transition-transform
              duration-500
              group-hover:scale-[1.02]
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
            mt-5
            text-[18px]
            font-medium
            leading-[1.2]
            text-[#002E99]
            md:text-[20px]
            lg:text-[22px]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            min-h-[68px]
            text-[16px]
            leading-[1.55]
            text-[#6A7282]
            md:text-[17px]
            lg:text-[18px]
            lg:leading-[1.55]
          "
        >
          {description}
        </p>

      </div>
    </motion.div>
  );
}