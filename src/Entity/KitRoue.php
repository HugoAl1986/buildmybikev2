<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\KitRoueRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=KitRoueRepository::class)
 * @ApiResource(
 *  normalizationContext={
 *      "groups"={"KitRoue_read"}
 *  }
 * )
 */
class KitRoue
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"KitRoue_read","commande_read","commandes_subresource"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"KitRoue_read"})
     * @Assert\NotBlank(
     *              message="Veuillez choisir un modèle de roues"
     * )
     */
    private $modele;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"KitRoue_read"})
     * @Assert\NotBlank(
     *              message="Veuillez choisir une couleur"
     * )
     */
    private $couleur;

    /**
     * @ORM\Column(type="float")
     * @Groups({"KitRoue_read","commande_read","commandes_subresource"})
     */
    private $prix;

    /**
     * @ORM\ManyToOne(targetEntity=Commande::class, inversedBy="KitRoues")
     * @Groups({"KitRoue_read"})
     */
    private $commande;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModele(): ?string
    {
        return $this->modele;
    }

    public function setModele(string $modele): self
    {
        $this->modele = $modele;

        return $this;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getCommande(): ?Commande
    {
        return $this->commande;
    }

    public function setCommande(?Commande $commande): self
    {
        $this->commande = $commande;

        return $this;
    }
}
