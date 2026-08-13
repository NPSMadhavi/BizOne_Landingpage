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
        bg-[#FFFFFF]
        p-3
        shadow-none
        transition-shadow
        duration-300
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] 
        sm:rounded-[19px]
          lg:rounded-[20px]
      "
    >

      {/* Card Content */}
      <div className="flex flex-col ">

        {/* Title */}
        <h3
          className="
            text-[14px]
            md:text-[18px]
            lg:text-[20px]
            font-medium
            leading-5
            text-[#003DA5]
            sm:text-[15px]
            
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-1.5
            min-h-[42px]
            text-[12px]
            md:text-[14px]
            leading-[15px]
            text-[#475467]           
            sm:leading-[17px]
          "
        >
          {description}
        </p>

        {/* Image */}
        <div
          className="
            mt-3
            w-full
            overflow-hidden
            rounded-[14px]
             border-15 border-[#D9EBFF]
            bg-[#E6E9ED]
        
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
              transition-transform
              duration-500
              group-hover:scale-[1.02]
            "
          />
        </div>

      </div>

    </motion.div>
  );
}