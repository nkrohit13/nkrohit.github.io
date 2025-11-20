---
import Gallery from '../../../../components/Gallery.astro';
import BaseLayout from '../../../../layouts/BaseLayout.astro';

// Sample image data - replace with your actual images
const dailyUIChallenges = [
    {
        src: '/challenges/daily-ui/01-signup.jpg',
        alt: 'Sign Up Form Design',
        title: 'Day 1: Sign Up',
        description: 'Clean and modern sign up form'
    },
    {
        src: '/challenges/daily-ui/02-credit-card.jpg',
        alt: 'Credit Card Checkout',
        title: 'Day 2: Credit Card Checkout',
        description: 'Sleek payment form'
    }
    // Add more images as needed
];
---

<BaseLayout title="Daily UI Challenges - Hype4Academy" description="Daily UI Design Challenges">
    <div class="container mx-auto px-4 py-12">
        <h1 class="text-4xl font-bold mb-8">Daily UI Design Challenges</h1>

        <!-- Gallery Component -->
        <Gallery images={dailyUIChallenges} />

        <div class="mt-12 text-center">
            <p class="text-lg text-gray-600">Check back daily for new design challenges and inspiration!</p>
        </div>
    </div>
</BaseLayout>
