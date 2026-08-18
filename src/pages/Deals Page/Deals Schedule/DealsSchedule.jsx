import React, { useState, useEffect } from "react";
import { FaClock, FaBolt, FaBell, FaFire, FaCircleCheck } from "react-icons/fa6";
import "./DealsSchedule.css";

export const DealsSchedule = ({ onSetReminder, onSelectSlot, activeSlotId }) => {
    const [reminders, setReminders] = useState({});

    const slots = [
        {
            id: "live",
            time: "10:00 AM",
            label: "LIVE NOW",
            status: "active",
            tag: "48 Deals Active",
            discountRange: "Up to 70% OFF",
            highlight: "Tech & Accessories Blitz",
        },
        {
            id: "afternoon",
            time: "02:00 PM",
            label: "DROPPING SOON",
            status: "upcoming",
            tag: "Starts in 2h 15m",
            discountRange: "Up to 65% OFF",
            highlight: "Fashion & Luxury Footwear",
        },
        {
            id: "evening",
            time: "06:00 PM",
            label: "PRIME DROP",
            status: "upcoming",
            tag: "Starts in 6h 15m",
            discountRange: "Up to 60% OFF",
            highlight: "Smart Home & Audio Gear",
        },
        {
            id: "night",
            time: "09:00 PM",
            label: "MIDNIGHT BLITZ",
            status: "upcoming",
            tag: "Night Owl Exclusive",
            discountRange: "Up to 75% OFF",
            highlight: "Beauty, Wellness & Fragrance",
        },
    ];

    const handleReminderToggle = (e, slot) => {
        e.stopPropagation();
        const nextState = !reminders[slot.id];
        setReminders((prev) => ({
            ...prev,
            [slot.id]: nextState,
        }));

        if (onSetReminder) {
            onSetReminder(slot, nextState);
        }
    };

    return (
        <section className="deals-schedule-section">
            <div className="schedule-header">
                <div className="schedule-badge">
                    <FaClock className="schedule-badge-icon" />
                    <span>DAILY DROP SCHEDULE</span>
                </div>
                <h2>Flash Rounds & Upcoming Drops</h2>
                <p>Never miss a limited-stock drop. Set reminders to get notified the second deals go live.</p>
                <div className="schedule-mobile-hint">
                    <span>Swipe horizontally to view all drops ➔</span>
                </div>
            </div>

            <div className="schedule-grid">
                {slots.map((slot) => {
                    const isLive = slot.status === "active";
                    const isSelected = activeSlotId === slot.id;
                    const hasReminder = !!reminders[slot.id];

                    return (
                        <div
                            key={slot.id}
                            className={`schedule-card ${isLive ? "is-live" : "is-upcoming"} ${
                                isSelected ? "selected" : ""
                            }`}
                            onClick={() => onSelectSlot && onSelectSlot(slot.id)}
                            role="button"
                            tabIndex={0}
                        >
                            {isLive ? (
                                <div className="schedule-pill live-pill">
                                    <span className="live-dot-pulse"></span>
                                    <FaFire /> {slot.label}
                                </div>
                            ) : (
                                <div className="schedule-pill upcoming-pill">
                                    <FaClock /> {slot.label}
                                </div>
                            )}

                            <div className="schedule-time">{slot.time}</div>

                            <div className="schedule-discount-badge">{slot.discountRange}</div>

                            <p className="schedule-highlight">{slot.highlight}</p>

                            <div className="schedule-footer">
                                <span className="schedule-tag">{slot.tag}</span>

                                {!isLive && (
                                    <button
                                        type="button"
                                        className={`reminder-btn ${hasReminder ? "active" : ""}`}
                                        onClick={(e) => handleReminderToggle(e, slot)}
                                        title={hasReminder ? "Reminder set!" : "Notify me when live"}
                                    >
                                        {hasReminder ? (
                                            <>
                                                <FaCircleCheck /> Set
                                            </>
                                        ) : (
                                            <>
                                                <FaBell /> Notify
                                            </>
                                        )}
                                    </button>
                                )}

                                {isLive && (
                                    <span className="live-status-text">
                                        <FaBolt /> Shopping Open
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default DealsSchedule;
