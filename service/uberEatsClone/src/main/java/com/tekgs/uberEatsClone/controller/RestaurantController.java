package com.tekgs.uberEatsClone.controller;

import com.tekgs.uberEatsClone.model.Restaurant;
import com.tekgs.uberEatsClone.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {
    @Autowired
    RestaurantRepository restaurantRepo;
    @GetMapping
    public List<Restaurant> getListOfAllRestaurants(){
        return restaurantRepo.findAll();
    }
}
