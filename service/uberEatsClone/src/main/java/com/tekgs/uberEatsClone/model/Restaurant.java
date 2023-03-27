package com.tekgs.uberEatsClone.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="restaurants")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Getter
    private int number_of_stars;
    @Getter
    private String rating_description;
    @Getter
    private String restaurant_title;
    @Getter
    private String restaurant_type;
    @Getter
    private String restaurant_img;





}
