'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

import { AnimatedText } from './components/animatedtext';
SwiperCore.use([Navigation, Pagination]);
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600'],
});

export default function Home() {
  const [projects, setProjects] = useState([]); // State to hold projects
  const [socialIcons, setSocialIcons] = useState([]); // State to hold social icons

  useEffect(() => {
    // Fetch projects from the API
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/projects'); // Adjust URL as needed
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    // Fetch social icons from the API
    const fetchSocialIcons = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/social-icons'); // Adjust URL as needed
        const data = await response.json();
        setSocialIcons(data);
      } catch (error) {
        console.error('Error fetching social icons:', error);
      }
    };

    fetchProjects();
    fetchSocialIcons();
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll<HTMLLIElement>('ul.link-list li');
    const images = document.querySelectorAll<HTMLImageElement>(
      '.background-images-wrapper .layer',
    );
    let oldImage: HTMLImageElement | null = null;

    function addListeners(el: HTMLLIElement) {
      el.addEventListener('mouseover', () => {
        const index = el.dataset.index;
        if (index) {
          changeImage(images[parseInt(index)]);
        }
      });
      el.addEventListener('mouseout', () => {
        if (oldImage) {
          gsap.to(oldImage, {
            inset: 'revert-layer',
            opacity: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power2.outIn',
          });
        }
        oldImage = null;
      });
    }

    function changeImage(el: HTMLImageElement) {
      if (el !== oldImage) {
        const tl = gsap.timeline();
        tl.to(oldImage, { opacity: 0, scale: 1 }).to(
          el,
          { opacity: 1, scale: 1.1, duration: 0.6, ease: 'power2.outIn' },
          '<',
        );
        oldImage = el;
      }
    }

    links.forEach((el) => addListeners(el));
  }, []);

  return (
    <div className="h-full w-full flex-col items-center p-12">
      <div className="videoContainer">
        <video
          className="roundvideo"
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
        >
          <source src="../bg-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="background-images-wrapper">
        <div className="relative w-full h-full">
          {/* Background Images */}
          <Image
            className="layer"
            src="https://images.unsplash.com/photo-1626427223333-183395267453?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
            fill
            alt="Background 1"
          />
        </div>
        {/* Add other background images similarly */}
        <div className="flex w-11/12 items-center justify-between">
          <ul className="link-list lg:text-6xl text-4xl">
            {projects.map((project, index) => (
              <li key={project.id} data-index={index}>
                <Link
                  href={`${project.links}`} // Adjust URL for project details
                  passHref
                  prefetch={true}
                  className={poppins.className}
                >
                  <AnimatedText text={project.name} /> {/* Use project name */}
                </Link>
              </li>
            ))}
          </ul>

          {/* Step 3: Replace the static icons with dynamic icons */}
          <div className="flex items-center justify-end">
            <div className="flex flex-col gap-5">
              {socialIcons.map((icon) => (
                <Link key={icon.id} href={icon.url} passHref>
                  <Image
                    width={20}
                    height={20}
                    alt={icon.name}
                    src={icon.icon_path} // Use the path from the API
                    className="cursor-pointer h-6" // Adjust styles as needed
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SpeedInsights />
    </div>
  );
}
