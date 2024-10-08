<script>
    // COMPONENTS
    import { onMount } from 'svelte';
    import Scrollama from 'scrollama';

    // VIDEO
    const videoPath = import.meta.env.MODE === 'production' ? './video' : '/video';
    const videoUrl = `${videoPath}/pne-flyover-labels-lores.mp4`;
    const videoUrlWebm = `${videoPath}/pne-flyover-labels-lores.webm`;


    $: console.log('Environment:', import.meta.env);
    $: console.log('MODE:', import.meta.env.MODE);
    $: console.log(videoUrl)

    // VARIABLES
    let data, videoElement;
    let sections = [];
    let currentSection = null;
    let isVideoReady = false;

    // FUNCTIONS
    function updateVideoProgress() {
        if (!currentSection || !isVideoReady) return;

        const sectionTop = currentSection.offsetTop;
        const sectionHeight = currentSection.offsetHeight;
        const scrollTop = window.scrollY + window.innerHeight / 2;
        const progress = (scrollTop - sectionTop) / sectionHeight;
        const end = parseFloat(currentSection.getAttribute("data-end"));
        const start = parseFloat(currentSection.getAttribute("data-start"));

        if (progress >= 0 && progress <= 1) {
            const currentTime = start + (end - start) * progress;
            videoElement.currentTime = currentTime;
            // console.log(`CURRENT TIME: ${currentTime}`)
        }
    }

    async function init() {
        const scroller = Scrollama();

        // Ensure the video element is properly initialized
        if (videoElement) {
            videoElement.muted = true; // Mute the video initially
        }

        scroller.setup({
            step: '.section',
            // step: sections,
            offset: 0.5,
            debug: false
        })
        .onStepEnter(({ element }) => {
            currentSection = element;
            updateVideoProgress();
        });

        // Add scroll listener to handle smooth playback
        window.addEventListener('scroll', updateVideoProgress);
        // handle window resize events
        window.addEventListener('resize', scroller.resize);

        videoElement.addEventListener("loadeddata", () => {
            videoElement.muted = true;  // Mute the video
            isVideoReady = true;  // Mark video as ready
            updateVideoProgress();  // Update video progress once the video is ready
        });

        // Ensure the video is paused initially
        videoElement.addEventListener("canplay", () => {
            videoElement.pause();
        });
    }

    onMount(init);
</script>

<header>
    <h1>Hastings Park, an $80M business</h1>
    <p class="subhead">The PNE’s annual fair first opened in 1910. At nearly a half-kilometre square, it was one of the largest of its kind in North America.</p>
</header>

<div class="video-container">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={videoElement} preload="auto">
        <source src={videoUrl} type="video/mp4">
        <source src={videoUrlWebm} type="video/webm">
            Your browser doesn’t support the video tag.
    </video>
</div>  

<div id="scrollytelling">
    <div class="section" data-start="0" data-end="1.5" bind:this={sections}>
        <div class="copy">
            <p>During the Second World War the fair was shut down and the site was used to detain Japanese Canadians. Several plaques now commemorate the roughly 8,000 people who were detained at buildings around the 0.7-square-kilometre site.</p>
        </div>
    </div>
    <div class="section" data-start="1.5" data-end="9" bind:this={sections}>
        <div class="copy">
            <h2>PNE Forum</h2>
            <p class="section-subhead">Built 1931</p>
            <p>The art deco heritage building is a multi-use facility used mainly for commercial video shoots. During the Second World War, Japanese Canadian men and teen boys were detained here.</p>
            <h2>Garden Auditorium</h2>
            <p class="section-subhead">Built 1939-40</p>
            <p>The streamlined art moderne heritage building hosts events and classes by CircusWest Performing Arts Society.</p>
        </div>
    </div>
    <div class="section" data-start="9" data-end="16" bind:this={sections}>
        <div class="copy">
            <h2>Pacific Coliseum</h2>
            <p class="section-subhead">Built 1968</p>
            <p>The 17,500-seat facility hosts sports, concerts and special events. It was home to the Vancouver Canucks from 1970-1995.</p>
        </div>
    </div>
    <div class="section" data-start="16" data-end="22" bind:this={sections}>
        <div class="copy">
            <h2>Agrodome</h2>
            <p class="section-subhead">Built 1963</p>
            <p>The 2,700-seat facility houses an ice skating rink for minor hockey and figure skating events as well as agricultural shows.</p>
            <h2>Livestock building</h2>
            <p class="section-subhead">Built 1929-39</p>
            <p>The art moderne heritage building is used mainly for filming and storage. During the Second World War, over 3,000 Japanese Canadian women and children were detained here.</p>
        </div>
    </div>
    <div class="section" data-start="22" data-end="26" bind:this={sections}>
        <div class="copy">
            <h2>Hastings racecourse</h2>
            <p class="section-subhead">Built 1892</p>
            <p>Officials have talked for years about ‘greening’ the track, which covers nearly 30% of the park.</p>
        </div>
    </div>
    <div class="section" data-start="26" data-end="33" bind:this={sections}>
        <div class="copy">
            <h2>Parking and roads</h2>
            <p>Roughly 25% of Hastings Park is made up of roads and parking spaces.</p>
        </div>
    </div>
    <div class="section" data-start="33" data-end="38" bind:this={sections}>
        <div class="copy">
            <h2>Playland</h2>
            <p class="section-subhead">Built 1958</p>
            <p>Originally located at the Coliseum site, the park was renamed and moved to its current location in 1958 – the same year the popular wooden rol ler coaster was built.</p>
        </div>
    </div>
    <div class="section" data-start="38" data-end="45" bind:this={sections}>
        <div class="copy">
            <p>Today, the fair hosts half a million people or more each year. Hastings Park’s aging buildings host film productions, live events, concerts, trade shows and are leased to tenants like CircusWest and Great Canadian Casino.</p>
        </div>
    </div>
</div>
<main>


</main>

<footer>
    <p class="source">Source: Pacific National Exhibition, HastingsPark1942.ca, Google Earth, City of Vancouver</p>
</footer>
  
<style>
    @import '$css/normalize.css';
    @import '$css/fonts.css';
    @import '$css/colors.css';
    @import '$css/app.css';

    header {
        background: rgba(0,0,0,0.4);
		margin-bottom: 2rem;
        padding: 10px;
	}
	header > h1 {
		text-align: center;
	}
	header .subhead {
        color: #FFF !important;
		margin: 0 auto;
		max-width: 525px;
		text-align: center;
	}
    .video-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
        display: flex;
        justify-content: center;
        /* align-items: center; */
    }
    video {
        /* width: auto;
        height: 100vh; */
        /* position: absolute; */
        min-width: 100%; /* Ensures the video covers the width */
        min-height: 100%; /* Ensures the video covers the height */
        width: auto; /* Maintain aspect ratio */
        height: auto; /* Maintain aspect ratio */
        /* top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); Center the video */
    }

    .section {
        height: 100vh;
        padding: 20px;
        justify-content: center;
        max-width: 600px;
        margin: 0 auto;
    }
    .section .copy {
        background-color: rgba(255, 255, 255, 0.75);
        padding: 1px 10px 5px 10px;
    }
    #app .section h2 {
        font-size: 1.1rem;
        margin-top: 15px;
    }
    #app .section p.section-subhead {
        color: var(--grey01);
        font-size: 0.95rem;
    }
    #app footer p {
        background-color: rgba(0,0,0,0.4);
        color: #FFF;
        padding: 5px;
    }

    @media only screen and (min-width: 400px) {
        header,
        footer {
            margin: 0 auto;
            max-width: 360px;
        }
        #scrollytelling {
            margin: 0 auto;
            max-width: 360px;
        }
    }
</style>
