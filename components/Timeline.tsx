"use client"

import React from 'react'
import { TimelineEvent } from '@/data/biography'
import { motion } from 'framer-motion'

interface TimelineProps {
    events: TimelineEvent[]
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
    return (
        <div className="relative container mx-auto px-4 py-12">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 transform -translate-x-1/2 md:translate-x-0" />

            <div className="space-y-12">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            } items-center`}
                    >
                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10" />

                        {/* Content Card */}
                        <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                            }`}>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-orange-400">
                                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full mb-2">
                                    {event.year}
                                </span>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                                <p className="text-gray-600 mb-3">{event.description}</p>
                                {event.location && (
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {event.location}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Timeline
