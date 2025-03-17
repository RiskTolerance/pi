<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';

	const placeholderData: { title: string; author: string; text: string }[] = [
		{
			title: 'This Is A Fake Title',
			author: 'Dave Smith',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, molestiae nesciunt totam veniam tenetur aspernatur animi veritatis vitae accusantium facilis nemo atque aut nulla labore ratione dolor ex velit nisi!'
		},
		{
			title: 'This Is A Real Title',
			author: 'Bill Billy',
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia voluptatum error harum ut doloribus, laborum saepe culpa repudiandae delectus, est in vel, porro voluptas. Asperiores mollitia quis deserunt aliquam perferendis.'
		},
		{
			title: 'Title Time',
			author: 'Chad Chadderson',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum quas doloremque aut deleniti, expedita repudiandae possimus aperiam cumque obcaecati eos numquam sapiente ut eligendi praesentium earum dolores, illo nemo autem molestiae! Blanditiis quia laudantium accusamus non totam porro amet.'
		}
	];
</script>

<!-- TODO: look into Sanity to determine if page metadata can be created via entires. Can I use it like Craft? -->
<Meta
	title="Blog"
	description="A listing of our blog posts"
	ogDescription="A description for open graph"
	ogImage=""
	twitterTitle=""
	twitterDescription=""
	twitterImage=""
	favicon=""
	favicon512=""
></Meta>

<div>
	{#each placeholderData as post}
		<div class="aspect-[2/3] w-full">
			<h1>{post.title}</h1>
			<p>{post.author}</p>
			<p>{post.text}</p>
		</div>
	{/each}
</div>
