<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CommandeRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CommandeRepository::class)
 * @ApiResource(
 *  normalizationContext={
 *      "groups"={"commande_read"}
 *  },
 *  subresourceOperations={
 *      "api_clients_commandes_get_subresource"={
 *              "normalization_context" = {"groups"={"commandes_subresource"}}
 *      }
 *   }
 * )
 */
class Commande
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"commande_read","clients_read","commandes_subresource"})
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"commande_read","clients_read","commandes_subresource"})
     */
    private $numCommande;

    /**
     * @ORM\Column(type="float")
     * @Groups({"commande_read","clients_read","commandes_subresource"})
     */
    private $montant;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"commande_read","commandes_subresource"})
     */
    private $dateCommande;

    /**
     * @ORM\ManyToOne(targetEntity=Clients::class, inversedBy="commandes")
     * @Groups({"commande_read"})
     */
    private $client;

    /**
     * @ORM\OneToMany(targetEntity=KitRoute::class, mappedBy="commande")
     * @Groups({"commande_read","commandes_subresource"})
     */
    private $kitRoutes;

    /**
     * @ORM\OneToMany(targetEntity=KitPiste::class, mappedBy="commande")
     * @Groups({"commande_read","commandes_subresource"})
     */

    private $kitPistes;

    /**
     * @ORM\OneToMany(targetEntity=KitCyclocross::class, mappedBy="commande")
     * @Groups({"commande_read","commandes_subresource"})
     */

    private $kitCyclocrosses;

    public function __construct()
    {
        $this->kitRoutes = new ArrayCollection();
        $this->kitPistes = new ArrayCollection();
        $this->kitCyclocrosses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumCommande(): ?int
    {
        return $this->numCommande;
    }

    public function setNumCommande(int $numCommande): self
    {
        $this->numCommande = $numCommande;

        return $this;
    }

    public function setMontant(float $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getMontant(): ?float
    {
        return $this->montant;
    }

    public function getDateCommande(): ?\DateTimeInterface
    {
        return $this->dateCommande;
    }

    public function setDateCommande(\DateTimeInterface $dateCommande): self
    {
        $this->dateCommande = $dateCommande;

        return $this;
    }

    public function getClient(): ?Clients
    {
        return $this->client;
    }

    public function setClient(?Clients $client): self
    {
        $this->client = $client;

        return $this;
    }

   

    /**
     * @return Collection|KitRoute[]
     */
    public function getKitRoutes(): Collection
    {
        return $this->kitRoutes;
    }

    public function addKitRoute(KitRoute $kitRoute): self
    {
        if (!$this->kitRoutes->contains($kitRoute)) {
            $this->kitRoutes[] = $kitRoute;
            $kitRoute->setCommande($this);
        }

        return $this;
    }

    public function removeKitRoute(KitRoute $kitRoute): self
    {
        if ($this->kitRoutes->removeElement($kitRoute)) {
            // set the owning side to null (unless already changed)
            if ($kitRoute->getCommande() === $this) {
                $kitRoute->setCommande(null);
            }
        }

        return $this;
    }

    
    /**
     * @return Collection|KitPiste[]
     */
    public function getKitPistes(): Collection
    {
        return $this->kitPistes;
    }

    public function addKitPiste(KitPiste $kitPiste): self
    {
        if (!$this->kitPistes->contains($kitPiste)) {
            $this->kitPistes[] = $kitPiste;
            $kitPiste->setCommande($this);
        }

        return $this;
    }

    public function removeKitPiste(KitPiste $kitPiste): self
    {
        if ($this->kitPistes->removeElement($kitPiste)) {
            // set the owning side to null (unless already changed)
            if ($kitPiste->getCommande() === $this) {
                $kitPiste->setCommande(null);
            }
        }

        return $this;
    }

    
    /**
     * @return Collection|KitCyclocross[]
     */
    public function getKitCyclocrosses(): Collection
    {
        return $this->kitCyclocrosses;
    }

    public function addKitCyclocross(KitCyclocross $kitCyclocross): self
    {
        if (!$this->kitCyclocrosses->contains($kitCyclocross)) {
            $this->kitCyclocrosses[] = $kitCyclocross;
            $kitCyclocross->setCommande($this);
        }

        return $this;
    }

    public function removeKitCyclocross(KitCyclocross $kitCyclocross): self
    {
        if ($this->kitCyclocrosses->removeElement($kitCyclocross)) {
            // set the owning side to null (unless already changed)
            if ($kitCyclocross->getCommande() === $this) {
                $kitCyclocross->setCommande(null);
            }
        }

        return $this;
    }
}
