import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

@Component({
    selector: 'app-company-profile',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './company-profile.component.html',
    styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent implements OnInit, AfterViewInit {
    benefits = [
        { title: 'Global Reach', description: 'Connecting you with opportunities worldwide through our extensive network.', icon: '🌍' },
        { title: 'Secure & Safe', description: 'Top-tier security protocols to ensure your data and transactions are protected.', icon: '🔒' },
        { title: '24/7 Support', description: 'Our dedicated team is always here to help you, anytime, anywhere.', icon: '🎧' },
        { title: 'Innovation First', description: 'Leveraging the latest technology to stay ahead of the curve.', icon: '🚀' }
    ];

    testimonials = [
        { name: 'Sarah Johnson', role: 'CEO, TechFlow', text: 'The level of service and dedication is unmatched. They truly care about their clients success.', avatar: 'https://i.pravatar.cc/150?u=sarah' },
        { name: 'Michael Chen', role: 'Founder, StartUp', text: 'Incredible results! Our productivity skyrocketed after implementing their solutions.', avatar: 'https://i.pravatar.cc/150?u=michael' },
        { name: 'Emily Davis', role: 'Director, Creative', text: 'Beautiful design and seamless functionality. A joy to work with.', avatar: 'https://i.pravatar.cc/150?u=emily' }
    ];

    pricingPlans = [
        { name: 'Starter', price: '$29', period: '/mo', features: ['5 Projects', 'Basic Analytics', 'Community Support'], highlight: false },
        { name: 'Professional', price: '$99', period: '/mo', features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Team Collaboration'], highlight: true },
        { name: 'Enterprise', price: 'Custom', period: '', features: ['Dedicated Account Manager', 'Custom Integrations', 'SLA', '24/7 Phone Support'], highlight: false }
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ScrollSmoother);
        }
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            ScrollSmoother.create({
                wrapper: '#smooth-wrapper',
                content: '#smooth-content',
                smooth: 1.5,
                effects: true
            });
        }
    }

    scrollToSection(sectionId: string, event: Event) {
        event.preventDefault();
        if (isPlatformBrowser(this.platformId)) {
            gsap.to(window, { duration: 1, scrollTo: { y: sectionId, offsetY: 70 }, ease: 'power2.out' });
        }
    }
}
