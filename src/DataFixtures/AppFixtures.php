<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Clients;
use App\Entity\Commande;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

/**
 * L'encodeur de mot de passe
 * @var UserPasswordEncoderInterface
 */

private $encoder;

public function __construct(UserPasswordEncoderInterface $encoder){
    
    $this ->encoder = $encoder;

}

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create("fr_FR");
        
        for($i = 1; $i <= 10; $i++)
        {
        $client = new Clients();
        $hash = $this->encoder->encodePassword($client,"password");
        $client -> setPrenom($faker->firstName)
                -> setNom($faker->lastName)
                -> setdateDeNaissance($faker->dateTimeBetween($startDate = '-50years',$endDate='-18 years'))
                -> setNumeroRue($faker->numberBetween($min=1 , $max=150))
                -> setNomRue($faker->streetName)
                -> setVille($faker->city)
                -> setCodePostal($faker->numberBetween($min = 45000 , $max = 95000))
                -> setEmail($faker->email)
                -> setPassword($hash);

                $manager->persist($client);
            $numCommande = 1;

            for($j = 1; $j <= mt_rand($min=1,$max=5); $j++)
            {
                
                $commande = new Commande;
                $commande->setMontant(mt_rand($min=500,$max=5000))
                        ->setDateCommande($faker->dateTimeBetween($startDate='-3 years', $endDate = 'now'))
                        ->setClient($client)
                        ->setNumCommande($numCommande);
                        $numCommande++;

                $manager->persist($commande);


            }
        }
        
        $manager->flush($client);
        $manager->flush($commande);
    }
}
