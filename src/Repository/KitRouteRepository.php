<?php

namespace App\Repository;

use App\Entity\KitRoute;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method KitRoute|null find($id, $lockMode = null, $lockVersion = null)
 * @method KitRoute|null findOneBy(array $criteria, array $orderBy = null)
 * @method KitRoute[]    findAll()
 * @method KitRoute[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KitRouteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, KitRoute::class);
    }

    // /**
    //  * @return KitRoute[] Returns an array of KitRoute objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('k.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?KitRoute
    {
        return $this->createQueryBuilder('k')
            ->andWhere('k.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
