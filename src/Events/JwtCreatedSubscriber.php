<?php

namespace App\Events;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JwtCreatedSubscriber{

    public function updateJwtData(JWTCreatedEvent $event)
    {
        // Récupérer l'utilisateur pour avoir le prénom
            $user = $event->getUser();
        // Enrichir les datas pour récupérer les données
            $data = $event->getData();
            $data['prenom']=$user->getPrenom();
            
            $event->setData($data);
    }
}