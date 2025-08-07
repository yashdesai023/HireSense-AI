package com.hiresense.model;

import com.hiresense.enums.Role;

import jakarta.persistence.*;

import lombok.Getter;

import lombok.Setter;

import java.io.Serializable;

import java.util.HashSet;

import java.util.Set;



import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

@Entity

@Getter

@Setter

@Table(name = "users")

public class User extends BaseEntity implements Serializable, UserDetails {



    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;



    @Column(nullable = false, unique = true)

    private String email;



    @Column(nullable = false)

    private String password;



    @Column(name = "full_name")

    private String fullName;



    @ElementCollection(targetClass = Role.class, fetch = FetchType.EAGER)

    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))

    @Enumerated(EnumType.STRING)

    @Column(name = "role")

    private Set<Role> roles = new HashSet<>();



    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)

    private CandidateProfile candidateProfile;



    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)

    private RecruiterProfile recruiterProfile;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.name()))
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

