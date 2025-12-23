'use client';
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import ClientReview from './ClientReview/ClientReview';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

// const Personal = () => {
//   return (
//     <motion.main
//       className="space-y-24"
//       variants={VARIANTS_CONTAINER}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.section
//         variants={VARIANTS_SECTION}
//         transition={TRANSITION_SECTION}
//       >
//         <div className="flex-1">
//           <p className="text-zinc-600 dark:text-zinc-400">
//             Focused on creating intuitive and performant web experiences.
//             Bridging the gap between design and development.
//           </p>
//         </div>
//       </motion.section>

//       <motion.section
//         variants={VARIANTS_SECTION}
//         transition={TRANSITION_SECTION}
//       >
//         <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//           {PROJECTS.map((project) => (
//             <div key={project.name} className="space-y-2">
//               <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
//                 <ProjectVideo src={project.video} />
//               </div>
//               <div className="px-1">
//                 <a
//                   className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
//                   href={project.link}
//                   target="_blank"
//                 >
//                   {project.name}
//                   <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
//                 </a>
//                 <p className="text-base text-zinc-600 dark:text-zinc-400">
//                   {project.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       <motion.section
//         variants={VARIANTS_SECTION}
//         transition={TRANSITION_SECTION}
//       >
//         <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
//         <div className="flex flex-col space-y-2">
//           {WORK_EXPERIENCE.map((job) => (
//             <a
//               className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
//               href={job.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               key={job.id}
//             >
//               <Spotlight
//                 className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
//                 size={64}
//               />
//               <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
//                 <div className="relative flex w-full flex-row justify-between">
//                   <div>
//                     <h4 className="font-normal dark:text-zinc-100">
//                       {job.title}
//                     </h4>
//                     <p className="text-zinc-500 dark:text-zinc-400">
//                       {job.company}
//                     </p>
//                   </div>
//                   <p className="text-zinc-600 dark:text-zinc-400">
//                     {job.start} - {job.end}
//                   </p>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </motion.section>

//       <motion.section
//         variants={VARIANTS_SECTION}
//         transition={TRANSITION_SECTION}
//       >
//         <h3 className="mb-3 text-lg font-medium">Blog</h3>
//         <div className="flex flex-col space-y-0">
//           <AnimatedBackground
//             enableHover
//             className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
//             transition={{
//               type: 'spring',
//               bounce: 0,
//               duration: 0.2,
//             }}
//           >
//             {BLOG_POSTS.map((post) => (
//               <Link
//                 key={post.uid}
//                 className="-mx-3 rounded-xl px-3 py-3"
//                 href={post.link}
//                 data-id={post.uid}
//               >
//                 <div className="flex flex-col space-y-1">
//                   <h4 className="font-normal dark:text-zinc-100">
//                     {post.title}
//                   </h4>
//                   <p className="text-zinc-500 dark:text-zinc-400">
//                     {post.description}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </AnimatedBackground>
//         </div>
//       </motion.section>

//       <motion.section
//         variants={VARIANTS_SECTION}
//         transition={TRANSITION_SECTION}
//       >
//         <h3 className="mb-5 text-lg font-medium">Connect</h3>
//         <p className="mb-5 text-zinc-600 dark:text-zinc-400">
//           Feel free to contact me at{' '}
//           <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
//             {EMAIL}
//           </a>
//         </p>
//         <div className="flex items-center justify-start space-x-3">
//           {SOCIAL_LINKS.map((link) => (
//             <MagneticSocialLink key={link.label} link={link.link}>
//               {link.label}
//             </MagneticSocialLink>
//           ))}
//         </div>
//       </motion.section>
//     </motion.main>
//   )
// }


const Home = () => {

    useEffect(() => {
        const initAos = async () => {
            await import('aos');
            AOS.init({
                duration: 1000, // values from 0 to 3000, with step 50ms
                easing: 'ease', // default easing for AOS animations
                once: false, // whether animation should happen only once - while scrolling down
                mirror: true, // whether elements should animate out while scrolling past them
                anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

            });
        };
        initAos();
    }, [])

    return (
        <div className="overflow-hidden">
            <Hero />
            <Services />
            <Resume />
            <Projects />
            <Skills />
            <ClientReview />
            <Blog />
            <Contact />
        </div>
    );
};

export default Home;