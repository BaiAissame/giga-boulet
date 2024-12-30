import React from 'react'
import { drizzle } from 'drizzle-orm/neon-http';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import Image from 'next/image'

export default async function page() {
	return (
		<div className="flex">
			<section className="w-[20vw] h-[100vh]">
				<table className="w-full h-full table-fixed border-collapse">
					<tbody>
						<tr>
							<td className="py-4 px-2 text-center">Nouveauté</td>
						</tr>
						<tr>
							<td className="py-4 px-2 text-center">Bon plan</td>
						</tr>
						<tr>
							<td className="py-4 px-2 text-center">Menus</td>
						</tr>
						<tr>
							<td className="py-4 px-2 text-center">Burgers</td>
						</tr>
					</tbody>
				</table>
			</section>
			<section className="justify-center">
				<h1 className="m-2">Notre Carte</h1>
				<p className="text-center">Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !</p>
				<ul className="flex flex-wrap justify-center">
					<li className="m-4">
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
								</CardHeader>
								<CardContent>
									<Image
										src="/burgerblack.jpg"
										alt="image"
										width={200}
										height={200}
									/>
								</CardContent>
							</Card>
						</article>
					</li>
					<li className="m-4">
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
								</CardHeader>
								<CardContent>
									<Image
										src="/burgerblack.jpg"
										width={200}
										height={200}
									/>
								</CardContent>
							</Card>
						</article>
					</li>
					<li className="m-4">
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
								</CardHeader>
								<CardContent>
									<Image
										src="/burgerblack.jpg"
										width={200}
										height={200}
									/>
								</CardContent>
							</Card>
						</article>
					</li>
					<li className="m-4">
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
								</CardHeader>
								<CardContent>
									<Image
										src="/burgerblack.jpg"
										width={200}
										height={200}
									/>
								</CardContent>
							</Card>
						</article>
					</li>
					<li className="m-4">
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
								</CardHeader>
								<CardContent>
									<Image
										src="/burgerblack.jpg"
										width={200}
										height={200}
									/>
								</CardContent>
							</Card>
						</article>
					</li>
					<li className="m-4">
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
								</CardHeader>
								<CardContent>
									<Image
										src="/burgerblack.jpg"
										width={200}
										height={200}
									/>
								</CardContent>
							</Card>
						</article>
					</li>
				</ul>
			</section>
		</div>
	)
}
