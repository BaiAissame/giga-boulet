import React from 'react'
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
				<h1>Notre Carte</h1>
				<p>texte</p>
				<ul className="flex flex-wrap justify-center">
					<li>
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
									<CardDescription>
										Card Description
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Image
										src="next.svg"
										alt="image"
										width={200}
										height={200}
									/>
								</CardContent>
								<CardFooter>
									<p>Card Footer</p>
								</CardFooter>
							</Card>
						</article>
					</li>
					<li>
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
									<CardDescription>
										Card Description
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Image
										src="next.svg"
										width={200}
										height={200}
									/>
								</CardContent>
								<CardFooter>
									<p>Card Footer</p>
								</CardFooter>
							</Card>
						</article>
					</li>
					<li>
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
									<CardDescription>
										Card Description
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Image
										src="next.svg"
										width={200}
										height={200}
									/>
								</CardContent>
								<CardFooter>
									<p>Card Footer</p>
								</CardFooter>
							</Card>
						</article>
					</li>
					<li>
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
									<CardDescription>
										Card Description
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Image
										src="next.svg"
										width={200}
										height={200}
									/>
								</CardContent>
								<CardFooter>
									<p>Card Footer</p>
								</CardFooter>
							</Card>
						</article>
					</li>
					<li>
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
									<CardDescription>
										Card Description
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Image
										src="next.svg"
										width={200}
										height={200}
									/>
								</CardContent>
								<CardFooter>
									<p>Card Footer</p>
								</CardFooter>
							</Card>
						</article>
					</li>
					<li>
						<article>
							<Card>
								<CardHeader>
									<CardTitle>Nouveauté</CardTitle>
									<CardDescription>
										Card Description
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Image
										src="next.svg"
										width={200}
										height={200}
									/>
								</CardContent>
								<CardFooter>
									<p>Card Footer</p>
								</CardFooter>
							</Card>
						</article>
					</li>
				</ul>
			</section>
		</div>
	)
}
